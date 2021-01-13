const defaultDataset = {
    "init": {
        answers: [
            {content: "仕事を依頼したい", nextId: "job_offer"},
            {content: "音楽活動について知りたい", nextId: "music"},
            {content: "お付き合いしたい", nextId: "dating"},
        ],
        question: "こんにちは！ご用件はなんでしょうか？",
    },
    "job_offer": {
        answers: [
            {content: "Webサイトを制作してほしい", nextId: "website"},
            {content: "Webアプリを開発してほしい", nextId: "webapp"},
            {content: "その他", nextId: "other_jobs"}
        ],
        question: "どのようなお仕事でしょうか？",
    },
    "website": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webサイト制作についてですね。コチラからお問い合わせできます。",
    },
    "webapp": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webアプリ開発についてですね。コチラからお問い合わせできます。",
    },
    "other_jobs": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "その他についてですね。コチラからお問い合わせできます。",
    },
    "music": {
        answers: [
            {content: "YouTubeで動画を見る", nextId: "https://www.youtube.com/channel/UCZO-RINZtLhTru68xsrj9rA"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "YouTubeで音楽活動について発信しています。",
    },
    "dating": {
        answers: [
            {content: "DMする", nextId: "https://twitter.com/_MARO_Z"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "まずは一緒にランチでもいかがですか？DMしてください😘",
    },
}

export default defaultDataset