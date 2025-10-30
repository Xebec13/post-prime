interface AboutHostsProps {
    hosts: string[];

}

export default function AboutHosts({ hosts }: AboutHostsProps) {
    return (
        <div className="border-2 border-pink-500 text-9xl">
            {/* === Hosts list === */}

            {hosts.map((name, index) => (
                <p key={index} className="">
                    {name}
                </p>
            ))}



        </div>
    );
}