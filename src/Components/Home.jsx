import React from 'react'
import data from "./data.json"
import { PieChart } from '@mui/x-charts/PieChart';

export const Home = () => {

    const count = [];
    data.BehavioralAnalytics.forEach(element => {
        count[element] = (count[element] || 0) + 1;
    });
    console.log(data.ATTENDANCE)
    return (
        <div className='w-3/4 mx-auto pt-8'>
            <div className='uppercase font-medium'>Hello! {data.NAME}</div>
            <div className='uppercase tracking-widest text-center font-medium mb-2'>Attendance</div>
            <div className='flex gap-4 bg-[#d9d9d9] p-4'>
                <div className='flex flex-col gap-7 mt-14  font-medium'>
                    <p>FN</p>
                    <p>AN</p>
                </div>
                <div className='grid grid-cols-4 sm:grid-cols-5 gap-4 flex-1'>
                    <div className='flex flex-col items-center'>
                        <div className='font-semibold'>Monday</div>
                        <div className='pb-2 text-xs font-medium'>{data.ATTENDANCE.monday.date}</div>
                        <div className={`w-10 h-10 mb-4 ${data.ATTENDANCE.monday.fn == "absent" ? "bg-[#9f0000]" : "bg-[#09a218]"}`}></div>
                        <div className={`w-10 h-10 ${data.ATTENDANCE.monday.an == "absent" ? "bg-[#9f0000]" : "bg-[#09a218]"}`}></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='font-semibold'>Tuesday</div>
                        <div className='pb-2 text-xs font-medium'>{data.ATTENDANCE.tuesday.date}</div>
                        <div className={`w-10 h-10 mb-4 ${data.ATTENDANCE.tuesday.fn == "absent" ? "bg-[#9f0000]" : "bg-[#09a218]"}`}></div>
                        <div className={`w-10 h-10 ${data.ATTENDANCE.tuesday.an == "absent" ? "bg-[#9f0000]" : "bg-[#09a218]"}`}></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='font-semibold'>Wednesday</div>
                        <div className='pb-2 text-xs font-medium'>{data.ATTENDANCE.wednesday.date}</div>
                        <div className={`w-10 h-10 mb-4 ${data.ATTENDANCE.wednesday.fn == "absent" ? "bg-[#9f0000]" : "bg-[#09a218]"}`}></div>
                        <div className={`w-10 h-10 ${data.ATTENDANCE.wednesday.an == "absent" ? "bg-[#9f0000]" : "bg-[#09a218]"}`}></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='font-semibold'>Thursday</div>
                        <div className='pb-2 text-xs font-medium'>{data.ATTENDANCE.thursday.date}</div>
                        <div className={`w-10 h-10 mb-4 ${data.ATTENDANCE.thursday.fn == "absent" ? "bg-[#9f0000]" : "bg-[#09a218]"}`}></div>
                        <div className={`w-10 h-10 ${data.ATTENDANCE.thursday.an == "absent" ? "bg-[#9f0000]" : "bg-[#09a218]"}`}></div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='font-semibold'>Friday</div>
                        <div className='pb-2 text-xs font-medium'>{data.ATTENDANCE.friday.date}</div>
                        <div className={`w-10 h-10 mb-4 ${data.ATTENDANCE.friday.fn == "absent" ? "bg-[#9f0000]" : "bg-[#09a218]"}`}></div>
                        <div className={`w-10 h-10 ${data.ATTENDANCE.friday.an == "absent" ? "bg-[#9f0000]" : "bg-[#09a218]"}`}></div>
                    </div>
                </div>
            </div>

            <div className='flex gap-4 w-full flex-col sm:flex-row mt-4 '>
                <div className='flex flex-col gap-4 w-full sm:w-2/5 bg-[#d9d9d9]  p-4'>
                    <div className='mx-auto font-medium'>Homeworks</div>
                    <div className='flex flex-wrap justify-between gap-x-10 gap-y-4 mx-auto text-lg'>
                        {
                            data.homework.map((res) =>
                            (
                                <div className='uppercase font-medium'>{res}</div>
                            ))
                        }
                    </div>
                </div>

                <div className='flex flex-col gap-4 w-full sm:w-3/5 bg-[#d9d9d9] p-4 h-[200px]'>
                    <div className='mx-auto font-medium'>Behavioural Analytics</div>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: count.good, color: "#17a525", label: "Good" },
                                    { id: 1, value: count.bad, color: "#da2121", label: "Bad" },
                                ],
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}
