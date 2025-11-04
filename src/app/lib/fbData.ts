export interface FbPostsType {
  id: string;
  author: string;
  message: string;
  createdAt: string;
}

export const fbPosts: FbPostsType[] = [
  {
    id: "1",
    author: "Post Prime",
    message:
      "🎙️ Najnowszy odcinek podcastu już dostępny! W tym tygodniu rozmawiamy o najgorętszych transferach w NBA i analizujemy wpływ nowych zawodników na układ sił w lidze. Zapraszamy do słuchania i dzielenia się swoimi opiniami w komentarzach!",
    createdAt: "2025-09-30T10:00:00Z",
  },
  {
    id: "2",
    author: "Post Prime",
    message:
      "🏀 Kilka słów o ostatnim meczu NBA – emocje sięgały zenitu, a końcówka trzymała w napięciu do ostatnich sekund. Zastanawiamy się, co ta wygrana oznacza dla przyszłości drużyny i czy trener postawił na właściwą taktykę.",
    createdAt: "2025-09-29T09:00:00Z",
  },
  {
    id: "3",
    author: "Post Prime",
    message:
      "🎤 Nowy gość w studiu! W tym tygodniu odwiedził nas były zawodnik ligi, który podzielił się swoimi spostrzeżeniami na temat rosnącej roli młodych graczy i opowiedział kilka anegdot zza kulis. Ten odcinek to must-listen!",
    createdAt: "2025-09-28T08:00:00Z",
  },
  {
    id: "4",
    author: "Post Prime",
    message:
      "📊 Podsumowanie tygodnia – omawiamy najważniejsze wydarzenia z boisk NBA, kontuzje kluczowych zawodników oraz typujemy faworytów nadchodzących spotkań. Kto według Was ma największe szanse na play-offy?",
    createdAt: "2025-09-27T07:00:00Z",
  },
];


export interface FbInfoType {
  name: string;
  logo: string; 
  imgWall: string; 
  followers: string;
  following: string;
  text: string;
  link: string;
  buttons: {
    label: string;
    action: string;
  }[];
}

export const fbInfo: FbInfoType = {
  name: "Post Prime",
  logo: "/postprime-logo-2.png",
  imgWall: "/pp-wall.jpg",
  followers: "12k",
  following: "250",
  text: "Oficjalny fanpage podcastu Post Prime. Dołącz do nas, śledź nowinki i dyskutuj o NBA! Znajdziesz tu także ekskluzywne materiały zza kulis oraz dodatkowe treści tylko dla naszych fanów.",
  link: "https://facebook.com/PostPrimePL",
  buttons: [
    { label: "Obserwuj", action: "follow" },
    { label: "Wyślij wiadomość", action: "message" },
  ],
};