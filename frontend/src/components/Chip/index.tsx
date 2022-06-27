type chipProps = {
    title: string;
};

export const Chip = ({ title }: chipProps) => {
    return (<button className="rounded-full text-xs p-1 bg-white opacity-60">
        <span className="font-bold"> {title}</span>
    </button>)
}