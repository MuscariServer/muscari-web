export class Config {
    title = "Muscari Community"
    subtitle = ""

    about = "Muscari Community について"
    description = [
        "文章作成中..."
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