function getRandomAudio(audios: string[]): string {
  const randomAudio = audios[Math.floor(Math.random() * audios.length)];
  return randomAudio;
}

function playAudio(audioSrc: string): void {
  const audio = new Audio(`${process.env.PUBLIC_URL}/static/${audioSrc}`);

  audio.play();
}

export { getRandomAudio, playAudio };
