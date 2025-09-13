export declare function random(length: number, timestamp?: number): number;
export interface IUserAgentOptions {
    device?: Array<"mobile" | "desktop">;
}
declare function UserAgent(options: IUserAgentOptions): string;
export default UserAgent;
