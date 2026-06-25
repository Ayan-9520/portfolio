const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type Web3FormsResponse = {
  success: boolean;
  message?: string;
};

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      "Contact form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to your environment variables."
    );
  }

  const response = await fetch(WEB3FORMS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: data.name,
      email: data.email,
      message: data.message,
      subject: `New message from ${data.name} — Portfolio`,
      from_name: "Mohammad Ayan Portfolio",
    }),
  });

  const result = (await response.json()) as Web3FormsResponse;

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Failed to send message. Please try again.");
  }
}
