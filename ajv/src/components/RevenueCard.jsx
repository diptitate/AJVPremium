import React from "react";
import {revenueItems} from '../helpers/index.jsx'
import { CheckCircle2 } from "lucide-react";

const RevenueCard = () => {
    return(
      <div className="flex flex-col py-4">
        {revenueItems.map((item, index) => (
          <div className="w-full flex flex-row">
            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full" key={index}>
              <CheckCircle2 />             
            </div>
            <div className="pl-4">
              <h2 className=" font-semibold mt-2 lg:mt-0">{item.title}</h2>
              <p className=" mt-2">
                {item.description}
              </p>
              <div className=" bg-slate-500 w-full h-0.5 mt-2"></div>
            </div>
          </div>
        ))}
      </div>
    )
}
export default RevenueCard