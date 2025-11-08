// app/[lang]/dictionaries.ts
import "server-only";

export async function getDictionary(locale: 'ky' | 'en' | 'ru') {
    console.log('getDictionary locale: ' + locale);
  switch (locale) {
    case "en": {
      const dict = await import("./dictionaries/en.json");
      return dict.default;
    }
    case "ru": {
      const dict = await import("./dictionaries/ru.json");
      return dict.default;
    }
    case "ky": {
      const dict = await import("./dictionaries/ky.json");
      return dict.default;
    }
    default:
      throw new Error(`Unsupported locale: ${locale}`);
  }
}
