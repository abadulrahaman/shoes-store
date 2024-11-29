import { Card } from "./Card";

const All = () => {
    return (
        <div className="grid grid-cols-4 gap-6 my-12">
            {Data.map((item) => (
                <Card key={item.id} item={item} /> // Pass the whole item as a prop
            ))}
        </div>
    );
};

export default All;