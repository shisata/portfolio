import { TrafficCone } from 'lucide-react';

export const UnderConstruction = () => {
    return (
        <div name="construction-container" className="w-full h-full flex place-content-center justify-center text-text-default flex-wrap ">
          <h1 className="text-5xl md:text-8xl font-bold">Content Under Construction</h1>
          <TrafficCone size={`4rem`} className=""/>
        </div>
    )
}