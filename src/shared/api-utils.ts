export class ApiError extends Error {
  status: number;
  error: string;

  constructor({status, error, message}: {status: number, error: string, message: string}) {
    super(message);
    this.status = status;
    this.error = error;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

export async function withErrorHandling(fetchPromise: Promise<Response>): Promise<Response> {
  try {
    const response = await fetchPromise;

    if (!response.ok) {
      const errorText = await response.text();
      let errorJson = null;
      try {
        errorJson = JSON.parse(errorText);
      } catch (e) {
        errorJson = null;
      }
      throw new ApiError({
        status: response.status, 
        error: errorJson || errorText, 
        message: errorJson?.error || errorJson?.message || 'A server error occurred. HTTPStatus: ' + response.status
      });
    }

    return response;
  } catch (error) {
    console.log('Error during fetch operation:', error);
    throw error;
  }
}