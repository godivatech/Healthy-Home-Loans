/**
 * Formats a WhatsApp URL with a pre-filled message.
 * @param phoneNumber The phone number in international format without '+' or '00'.
 * @param message The message to pre-fill.
 * @returns The formatted WhatsApp URL.
 */
export const getWhatsAppUrl = (phoneNumber: string, message: string): string => {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

/**
 * Generates a standard message for loan inquiries.
 * @param serviceName The name of the service/loan.
 * @returns A formatted inquiry message.
 */
export const getLoanInquiryMessage = (serviceName: string): string => {
    return `Hello Healthy Home Loans, I'm interested in learning more about the ${serviceName}. Could you please provide more details?`;
};

export const DEFAULT_WHATSAPP_NUMBER = "919677719848";
