import USER_AGENTS from "../../../data/user-agents.json"

export function random(length: number, timestamp: number = Date.now()) {
  const seed = timestamp * length;
  const hash = (num: number) => {
    num = ((num >> 16) ^ num) * 0x45d9f3b;
    num = ((num >> 16) ^ num) * 0x45d9f3b;
    num = (num >> 16) ^ num;

    return Math.abs(num);
  };

  return (hash(seed) % length);
}

export interface IUserAgentOptions {
  device?: Array<"mobile" | "desktop">
}

function UserAgent(options: IUserAgentOptions) {
  const validDevices = options?.device?.filter((d): d is "mobile" | "desktop" =>
    d === "desktop" || d === "mobile"
  ) || ["desktop"];

  const device = USER_AGENTS[validDevices[random(validDevices.length)]]
  const ua = device[random(device.length)]

  return ua
}

export default UserAgent