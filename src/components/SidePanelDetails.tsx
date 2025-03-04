import React from "react";
import CountUp from "./ui-elements/CountUp";
import DecryptedText from "./ui-elements/DecryptedText";

export const RaceBredPrecision: React.FC = () => {
    return (
        <>
            <div className="flex flex-col text-black gap-3 md:gap-6">
                <p className="text-3xl md:text-5xl">Powertrain Excellence</p>
                <div>
                    <div className="flex items-end">
                        <p className="text-xl md:text-4xl font-semibold">4.2</p>
                        <p className="text-sm">L Naturally Aspirated Flat-6</p>
                    </div>
                    <p>Engine</p>
                </div>
                <div>
                    <div className="flex gap-2 items-end">
                        <CountUp to={565} className="text-xl md:text-4xl font-semibold"/>
                        <p className="text-sm">HP @</p>
                        <CountUp to={9250} />
                        <p className="text-sm">RPM</p>
                    </div>
                    <p>Power</p>
                </div>
                <div>
                    <div className="flex gap-2 items-end">
                        <CountUp to={465} className="text-xl md:text-4xl font-semibold"/>
                        <p className="text-sm">Nm</p>
                    </div>
                    <p>Torque</p>
                </div>
                <div>
                    <DecryptedText text="6-Speed Sequential Racing Gearbox"  className="text-xl md:text-4xl font-semibold"/>
                    <p>Transmission</p>
                </div>
                <div>
                    <DecryptedText text="Rear-Wheel Drive (RWD)"  className="text-xl md:text-4xl font-semibold"/>
                    <p>Drivetrain</p>
                </div>
            </div>
            <p>Unrivaled Speed & Agility</p>
            <div className="text-black flex mr-4 gap-8 sm:gap-12 md:gap-24">
                <div>
                    <p className="text-xl md:text-4xl font-semibold">3.2 s</p>
                    <p>0-100 km/h</p>
                </div>
                <div>
                    <div className="flex gap-2 items-end">
                        <CountUp to={290}  className="text-xl md:text-4xl font-semibold"/>
                        <p className="text-sm">+ km/h</p>
                    </div>
                    <p>Top Speed</p>
                </div>
                <div>
                    <div className="flex gap-2 items-end">
                        <p>~</p>
                        <CountUp to={1250} className="text-xl md:text-4xl font-semibold"/>
                        <p className="text-sm"> kg </p>
                    </div>
                    <p>Weight</p>
                </div>
            </div>
        </>
    );
};
