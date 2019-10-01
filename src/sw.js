addEventListener('activate', async () => {
  const [client] = await clients.matchAll();
  client.openWindow('/blorf.txt');
});