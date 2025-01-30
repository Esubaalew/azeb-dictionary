const domain = 'https://aziye.esube.com.et';

export async function getEntries(word: string) {
  try {
    const response = await fetch(`${domain}/entries/${word}`);
    const data = await response.json();
    return data.entries;
  } catch (error) {
    console.error('Error fetching entries:', error);
    return [];
  }
}

export async function getTotalEntries(word: string) {
  try {
    const response = await fetch(`${domain}/total_entries/${word}`);
    const data = await response.json();
    return data.total_entries;
  } catch (error) {
    console.error('Error fetching total entries:', error);
    return -1;
  }
}

export async function getWordOfTheDay() {
  try {
    const response = await fetch(`${domain}/word_of_the_day`);
    const data = await response.json();
    return data.word_of_the_day;
  } catch (error) {
    console.error('Error fetching word of the day:', error);
    return null;
  }
}

export async function getPartsOfSpeech(word: string) {
  try {
    const response = await fetch(`${domain}/speeches/${word}`);
    const data = await response.json();
    return data.parts_of_speech;
  } catch (error) {
    console.error('Error fetching parts of speech:', error);
    return [];
  }
}

export async function getDefinitions(word: string) {
  try {
    const response = await fetch(`${domain}/definitions/${word}`);
    const data = await response.json();
    return data.definitions;
  } catch (error) {
    console.error('Error fetching definitions:', error);
    return [];
  }
}

