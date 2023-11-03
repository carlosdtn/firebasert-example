export const clientRequest = async (url: string, options: RequestInit) => {
  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (error) {
    if (error) {
      console.error(`HTTP Error: ${error}`);
    } else {
      console.error(error);
    }
    throw error;
  }
};
