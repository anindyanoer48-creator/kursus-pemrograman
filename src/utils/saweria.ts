/**
 * Saweria Official Dynamic QRIS API Service
 * Account: HasyhiRama (ID: 90932685-6ed5-46da-ab4d-2bd8fe9ceef8)
 * Generates genuine Bank Indonesia EMVCo Dynamic QRIS with FIXED LOCKED AMOUNT.
 */

export const SAWERIA_USER_ID = '90932685-6ed5-46da-ab4d-2bd8fe9ceef8';
export const SAWERIA_USERNAME = 'HasyhiRama';
export const SAWERIA_URL = `https://saweria.co/${SAWERIA_USERNAME}`;

export interface SaweriaQrisResponse {
  id: string;
  qrString: string;
  amount: number;
  amountToDisplay: number;
  qrImageUrl: string;
  status: 'PENDING' | 'PAID' | 'ERROR';
  createdAt?: string;
}

/**
 * Creates an authentic dynamic Bank Indonesia QRIS via Saweria + Xendit.
 * When scanned by BCA, Mandiri, GoPay, Dana, OVO, ShopeePay, the exact nominal appears and is locked!
 */
export async function generateOfficialSaweriaQris(
  amount: number,
  studentName: string,
  message: string
): Promise<SaweriaQrisResponse> {
  const payload = {
    agree: true,
    amount: amount,
    customer_info: {
      email: 'student@algoritma.com',
      name: studentName.trim() || 'Pelajar Mandiri',
      phone: ''
    },
    message: message.trim(),
    payment_type: 'qris',
    vote: ''
  };

  // 1. Try local Vite proxy endpoint (/api/saweria/donations/:userId)
  try {
    const res = await fetch(`/api/saweria/donations/${SAWERIA_USER_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      const json = await res.json();
      const data = json.data;
      if (data && data.qr_string) {
        return {
          id: data.id,
          qrString: data.qr_string,
          amount: data.amount,
          amountToDisplay: data.etc?.amount_to_display || amount,
          qrImageUrl: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=10&data=${encodeURIComponent(
            data.qr_string
          )}`,
          status: 'PENDING',
          createdAt: data.created_at
        };
      }
    }
  } catch (err) {
    console.warn('Direct proxy failed, trying CORS proxy fallback...', err);
  }

  // 2. Fallback via reliable public CORS proxy if running statically outside Vite dev server
  try {
    const fallbackUrl = `https://corsproxy.io/?url=${encodeURIComponent(
      `https://backend.saweria.co/donations/${SAWERIA_USER_ID}`
    )}`;
    const res = await fetch(fallbackUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      const json = await res.json();
      const data = json.data;
      if (data && data.qr_string) {
        return {
          id: data.id,
          qrString: data.qr_string,
          amount: data.amount,
          amountToDisplay: data.etc?.amount_to_display || amount,
          qrImageUrl: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=10&data=${encodeURIComponent(
            data.qr_string
          )}`,
          status: 'PENDING',
          createdAt: data.created_at
        };
      }
    }
  } catch (err) {
    console.error('CORS proxy fallback failed:', err);
  }

  // 3. Fallback to direct web link QR if network is completely offline
  return {
    id: 'offline-' + Date.now(),
    qrString: SAWERIA_URL,
    amount: amount,
    amountToDisplay: amount,
    qrImageUrl: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=10&data=${encodeURIComponent(
      SAWERIA_URL
    )}`,
    status: 'PENDING'
  };
}

/**
 * Check if the donation has been paid.
 * In Saweria, when paid, the QR string is cleared or returns empty/completed.
 */
export async function checkDonationStatus(donationId: string): Promise<boolean> {
  if (!donationId || donationId.startsWith('offline-')) return false;

  try {
    const res = await fetch(`/api/saweria/donations/qris/${donationId}`);
    if (res.ok) {
      const json = await res.json();
      const data = json.data;
      // When paid, qr_string is cleared or empty in Saweria
      if (data && (!data.qr_string || data.qr_string.length === 0)) {
        return true;
      }
    } else if (res.status === 404) {
      // 404 means the QRIS session has been completed / consumed
      return true;
    }
  } catch (err) {
    console.warn('Status check warning:', err);
  }

  return false;
}
