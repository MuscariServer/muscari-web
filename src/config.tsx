export class Config {
    title = "Muscari Community"
    subtitle = ""

    about = "Muscari Community について"
    description = [
        "このサーバーでは公開ModPackで遊んだり和製と海外のModをミックスしレシピ改変を施した独自のModPackを作成したり",
        "Mod環境に経済やプラグインなどを取り入れるなどユニークなこともしてきました。",
        "独自パックでは多数の軽量化Modによる軽量化でスペックに自信がない人でも安心してプレイできます。",
        "一緒に素敵なマイクラライフを送ってみませんか？",
        "みなさんの参加を心よりお待ちしております。 "
    ]

    join = "今すぐ参加"

    discord = "https://discord.gg/dPfPqrXJPX"
    links = new Map<string, string>([
        ["Blog", "https://muscari.f5.si/blog/"],
        ["Discord", this.discord],
        ["Twitter", "https://twitter.com/Muscari_Server"],
        ["Github", "https://github.com/MuscariServer/"],
    ])

    copyright = "© 2023 Muscari Community"
}

export const config = new Config();