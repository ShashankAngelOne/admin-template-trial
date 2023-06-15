export async function logger(message: string, level: string = 'info'): Promise<void> {
    const logData = { message, level };

    
    try {
      const response = await fetch('/logs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(logData)
      });

      if (response.ok) {
        console.log('Log sent to server');
      } else {
        console.error('Failed to send log to server');
      }
    } catch (error) {
      console.error('Error sending log to server:', error);
    }
  }