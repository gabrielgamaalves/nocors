declare const USER_AGENTS: {
    desktop: string[];
    mobile: string[];
};
declare function random(length: number, timestamp?: number): number;
interface IUserAgentOptions {
    device?: Array<"mobile" | "desktop">;
}
declare function UserAgent(options: IUserAgentOptions): string;

export { type IUserAgentOptions, USER_AGENTS, UserAgent as default, random };
