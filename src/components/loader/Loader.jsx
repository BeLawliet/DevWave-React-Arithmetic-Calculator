import { Hourglass } from "ldrs/react";
import 'ldrs/react/Hourglass.css';

export const Loader = () => {
    return (
        <div className="flex justify-center py-10">
            <Hourglass
                size="100"
                bgOpacity="0.1"
                speed="1.75"
                color="#fb923c" 
            />
        </div>
    )
}
