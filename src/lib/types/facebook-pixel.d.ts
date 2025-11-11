interface Window {
    fbq: (
      track: string,
      event: string,
      data?: {
        content_name?: string;
        content_category?: string;
        value?: number;
        currency?: string;
        [key: string]: any;
      }
    ) => void;
  }