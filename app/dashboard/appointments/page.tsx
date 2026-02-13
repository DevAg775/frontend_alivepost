// "use client"

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"

// export default function AppointmentsPage() {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//       {/* Left Column: New Prescription Form */}
//       <Card className="bg-[#1a1c2e] text-white border-none shadow-xl">
//         <CardHeader className="flex flex-row items-center justify-between border-b border-gray-700">
//           <CardTitle className="text-xl font-semibold">New Prescription</CardTitle>
//           <span className="text-xs text-gray-400">Fill in the details to create a prescription</span>
//         </CardHeader>
//         <CardContent className="pt-6 space-y-6">
//           <div className="grid grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <label className="text-sm font-medium text-gray-300">Patient ID</label>
//               <Input placeholder="e.g., P001" className="bg-[#252841] border-gray-600 text-white" />
//             </div>
//             <div className="space-y-2">
//               <label className="text-sm font-medium text-gray-300">Patient Name</label>
//               <Input placeholder="Enter patient name" className="bg-[#252841] border-gray-600 text-white" />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm font-medium text-gray-300">Medicine</label>
//             <Input placeholder="Type to search medicines..." className="bg-[#252841] border-gray-600 text-white" />
//           </div>

//           <div className="space-y-3">
//             <label className="text-sm font-medium text-gray-300">Dosage Timing</label>
//             <div className="grid grid-cols-3 gap-3">
//               <button className="p-4 rounded-lg border border-gray-600 bg-[#252841] text-center hover:bg-blue-600 transition-colors">
//                 <span className="block text-lg">☀️</span>
//                 <span className="text-xs">Morning</span>
//               </button>
//               <button className="p-4 rounded-lg border border-gray-600 bg-[#252841] text-center hover:bg-blue-600 transition-colors">
//                 <span className="block text-lg">🌤️</span>
//                 <span className="text-xs">Afternoon</span>
//               </button>
//               <button className="p-4 rounded-lg border border-gray-600 bg-[#252841] text-center hover:bg-blue-600 transition-colors">
//                 <span className="block text-lg">🌙</span>
//                 <span className="text-xs">Evening</span>
//               </button>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label className="text-sm font-medium text-gray-300">Additional Notes</label>
//             <Textarea placeholder="Any special instructions..." className="bg-[#252841] border-gray-600 text-white h-24" />
//           </div>

//           <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-6">
//             Submit Prescription
//           </Button>
//         </CardContent>
//       </Card>

//       {/* Right Column: Recent Prescriptions */}
//       <Card className="bg-[#1a1c2e] text-white border-none shadow-xl">
//         <CardHeader className="flex flex-row items-center justify-between border-b border-gray-700">
//           <CardTitle className="text-xl font-semibold">Recent Prescriptions</CardTitle>
//           <Button variant="outline" size="sm" className="bg-[#252841] border-gray-600 text-white">Refresh</Button>
//         </CardHeader>
//         <CardContent className="pt-6">
//           <div className="p-4 rounded-lg bg-[#252841] border border-gray-700 space-y-2">
//             <div className="flex justify-between">
//               <span className="font-bold">shivam singh</span>
//               <span className="text-xs text-gray-400">Feb 11, 2026</span>
//             </div>
//             <p className="text-xs text-gray-400">ID: 01</p>
//             <p className="text-indigo-400 font-medium">Paracetamol <span className="text-gray-400 text-xs">500mg • tablet</span></p>
//             <div className="flex gap-2 pt-2">
//               <span className="px-2 py-1 bg-blue-900/50 text-blue-300 text-[10px] rounded">Morning</span>
//               <span className="px-2 py-1 bg-blue-900/50 text-blue-300 text-[10px] rounded">Afternoon</span>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
// "use client"

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Sun, CloudSun, Moon, Plus, CheckCircle2, RefreshCw } from "lucide-react"

// export default function AppointmentsPage() {
//   return (
//     <div className="min-h-screen bg-[#0f111a] p-4 md:p-8 text-slate-200">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
//         {/* Left Section: New Prescription Form (7 columns) */}
//         <div className="lg:col-span-7">
//           <Card className="bg-[#1a1c2e] border-slate-800 shadow-2xl">
//             <CardHeader className="border-b border-slate-800/50">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <CardTitle className="text-xl font-bold text-white">New Prescription</CardTitle>
//                   <p className="text-xs text-slate-400 mt-1">Fill in the details to create a prescription</p>
//                 </div>
//               </div>
//             </CardHeader>
//             <CardContent className="pt-6 space-y-6">
//               <div className="space-y-4">
//                 <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Patient Details</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <label className="text-xs text-slate-400">Patient ID</label>
//                     <Input placeholder="e.g., P001" className="bg-[#131524] border-slate-700 focus:border-indigo-500" />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-xs text-slate-400">Patient Name</label>
//                     <Input placeholder="Enter patient name" className="bg-[#131524] border-slate-700" />
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Medicine</h3>
//                 <label className="text-xs text-slate-400">Search Medicine</label>
//                 <Input placeholder="Type to search medicines..." className="bg-[#131524] border-slate-700" />
//               </div>

//               <div className="space-y-4">
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Dosage Timing</h3>
//                   <Button variant="ghost" size="sm" className="text-indigo-400 hover:bg-indigo-400/10 text-xs gap-1 h-7">
//                     <Plus size={14} /> Add Time
//                   </Button>
//                 </div>
//                 <div className="grid grid-cols-3 gap-3 text-center">
//                   <div className="p-4 rounded-xl bg-[#131524] border border-slate-800 hover:border-indigo-500 transition-colors cursor-pointer group">
//                     <Sun size={20} className="mx-auto text-slate-500 group-hover:text-indigo-400 mb-2" />
//                     <p className="text-xs font-bold">Morning</p>
//                     <p className="text-[10px] text-slate-500">6:00 - 10:00 AM</p>
//                   </div>
//                   <div className="p-4 rounded-xl bg-[#131524] border border-slate-800 hover:border-indigo-500 transition-colors cursor-pointer group">
//                     <CloudSun size={20} className="mx-auto text-slate-500 group-hover:text-indigo-400 mb-2" />
//                     <p className="text-xs font-bold">Afternoon</p>
//                     <p className="text-[10px] text-slate-500">12:00 - 3:00 PM</p>
//                   </div>
//                   <div className="p-4 rounded-xl bg-[#131524] border border-slate-800 hover:border-indigo-500 transition-colors cursor-pointer group">
//                     <Moon size={20} className="mx-auto text-slate-500 group-hover:text-indigo-400 mb-2" />
//                     <p className="text-xs font-bold">Evening</p>
//                     <p className="text-[10px] text-slate-500">6:00 - 9:00 PM</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Additional Notes</label>
//                 <Textarea placeholder="Any special instructions..." className="bg-[#131524] border-slate-700 min-h-[100px]" />
//               </div>

//               <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-6 gap-2">
//                 <CheckCircle2 size={18} /> Submit Prescription
//               </Button>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Right Section: Recent Prescriptions (5 columns) */}
//         <div className="lg:col-span-5">
//           <Card className="bg-[#1a1c2e] border-slate-800 shadow-2xl h-full">
//             <CardHeader className="border-b border-slate-800/50 flex flex-row items-center justify-between">
//               <CardTitle className="text-xl font-bold text-white">Recent Prescriptions</CardTitle>
//               <Button variant="outline" size="sm" className="bg-[#131524] border-slate-700 text-slate-300 gap-2">
//                 <RefreshCw size={14} /> Refresh
//               </Button>
//             </CardHeader>
//             <CardContent className="pt-6">
//               <div className="p-4 rounded-xl bg-[#131524] border border-slate-800 space-y-3 group cursor-pointer hover:border-indigo-500 transition-all">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h4 className="font-bold text-white group-hover:text-indigo-400">shivam singh</h4>
//                     <p className="text-[10px] text-slate-500 font-mono">ID: 01</p>
//                   </div>
//                   <span className="text-[10px] text-slate-500 italic">Feb 11, 2026, 12:47 PM</span>
//                 </div>
//                 <p className="text-indigo-300 text-sm">Paracetamol <span className="text-slate-500 text-xs ml-2">500mg • tablet</span></p>
//                 <div className="flex gap-2">
//                   <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px]">Morning</span>
//                   <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px]">Afternoon</span>
//                   <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px]">Evening</span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }



// "use client";

// import { useState } from "react";

// type Prescription = {
//   id: number;
//   patientId: string;
//   patientName: string;
//   medicine: string;
//   timings: string[];
//   notes: string;
//   date: string;
// };

// export default function AppointmentsPage() {
//   const [patientId, setPatientId] = useState("");
//   const [patientName, setPatientName] = useState("");
//   const [medicine, setMedicine] = useState("");
//   const [notes, setNotes] = useState("");
//   const [timings, setTimings] = useState<string[]>([]);
//   const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);

//   const toggleTiming = (time: string) => {
//     if (timings.includes(time)) {
//       setTimings(timings.filter((t) => t !== time));
//     } else {
//       setTimings([...timings, time]);
//     }
//   };

//   const handleSubmit = () => {
//     if (!patientId || !patientName || !medicine) return;

//     const newPrescription: Prescription = {
//       id: prescriptions.length + 1,
//       patientId,
//       patientName,
//       medicine,
//       timings,
//       notes,
//       date: new Date().toLocaleString(),
//     };

//     setPrescriptions([newPrescription, ...prescriptions]);

//     // Reset form
//     setPatientId("");
//     setPatientName("");
//     setMedicine("");
//     setNotes("");
//     setTimings([]);
//   };

//   return (
//     <div className="min-h-screen bg-slate-900 text-slate-200 p-8">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

//         {/* LEFT SIDE - FORM */}
//         <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
//           <h2 className="text-xl font-semibold mb-6">
//             New Prescription
//           </h2>

//           {/* Patient Details */}
//           <div>
//             <label className="block text-sm text-slate-400 mb-1">
//               Patient ID
//             </label>
//             <input
//               value={patientId}
//               onChange={(e) => setPatientId(e.target.value)}
//               placeholder="e.g. P001"
//               className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-purple-500"
//             />
//           </div>

//           <div className="mt-4">
//             <label className="block text-sm text-slate-400 mb-1">
//               Patient Name
//             </label>
//             <input
//               value={patientName}
//               onChange={(e) => setPatientName(e.target.value)}
//               placeholder="Enter patient name"
//               className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-purple-500"
//             />
//           </div>

//           {/* Medicine */}
//           <div className="mt-4">
//             <label className="block text-sm text-slate-400 mb-1">
//               Medicine
//             </label>
//             <input
//               value={medicine}
//               onChange={(e) => setMedicine(e.target.value)}
//               placeholder="Type to search medicines..."
//               className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-purple-500"
//             />
//           </div>

//           {/* Dosage Timing */}
//           <div className="mt-6">
//             <p className="text-sm text-slate-400 mb-3">
//               Dosage Timing
//             </p>

//             <div className="grid grid-cols-3 gap-3">
//               {["Morning", "Afternoon", "Evening"].map((time) => (
//                 <button
//                   key={time}
//                   onClick={() => toggleTiming(time)}
//                   className={`p-3 rounded-lg border text-sm transition ${
//                     timings.includes(time)
//                       ? "bg-purple-600 border-purple-600"
//                       : "bg-slate-900 border-slate-700 hover:border-purple-500"
//                   }`}
//                 >
//                   {time}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Notes */}
//           <div className="mt-6">
//             <label className="block text-sm text-slate-400 mb-1">
//               Additional Notes (Optional)
//             </label>
//             <textarea
//               value={notes}
//               onChange={(e) => setNotes(e.target.value)}
//               placeholder="Any special instructions..."
//               className="w-full p-2 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-purple-500"
//             />
//           </div>

//           {/* Submit */}
//           <button
//             onClick={handleSubmit}
//             className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 font-medium"
//           >
//             Submit Prescription
//           </button>
//         </div>

//         {/* RIGHT SIDE - RECENT PRESCRIPTIONS */}
//         <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
//           <h2 className="text-xl font-semibold mb-6">
//             Recent Prescriptions
//           </h2>

//           {prescriptions.length === 0 ? (
//             <p className="text-slate-500 text-sm">
//               No prescriptions yet.
//             </p>
//           ) : (
//             <div className="space-y-4">
//               {prescriptions.map((p) => (
//                 <div
//                   key={p.id}
//                   className="bg-slate-900 border border-slate-700 p-4 rounded-lg"
//                 >
//                   <div className="flex justify-between text-sm text-slate-400">
//                     <span>{p.patientName}</span>
//                     <span>{p.date}</span>
//                   </div>

//                   <p className="mt-2 font-medium">
//                     {p.medicine}
//                   </p>

//                   <div className="flex gap-2 mt-2">
//                     {p.timings.map((t) => (
//                       <span
//                         key={t}
//                         className="text-xs bg-purple-600 px-2 py-1 rounded-full"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>

//                   {p.notes && (
//                     <p className="mt-2 text-xs text-slate-400">
//                       {p.notes}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { RefreshCw, Sun, CloudSun, Moon, Plus } from "lucide-react"

export default function PrescriptionsPage() {
  const [selectedTimes, setSelectedTimes] = useState<string[]>([])
  const [customTimes, setCustomTimes] = useState<string[]>([])

  const dosageTimes = [
    { id: "morning", label: "Morning", time: "6:00 - 10:00 AM", icon: Sun },
    { id: "afternoon", label: "Afternoon", time: "12:00 - 3:00 PM", icon: CloudSun },
    { id: "evening", label: "Evening", time: "6:00 - 9:00 PM", icon: Moon },
  ]

  const toggleTime = (timeId: string) => {
    setSelectedTimes(prev =>
      prev.includes(timeId)
        ? prev.filter(t => t !== timeId)
        : [...prev, timeId]
    )
  }

  const recentPrescriptions = [
    {
      id: "01",
      patientName: "shivam singh",
      date: "Feb 11, 2026, 12:47 PM",
      medicine: "Paracetamol",
      dosage: "500mg • tablet",
      times: ["Morning", "Afternoon", "Evening"]
    }
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Side - New Prescription Form */}
      <Card className="border-slate-700">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">New Prescription</h2>
            <p className="text-sm text-gray-400">Fill in the details to create a prescription</p>
          </div>

          <form className="space-y-6">
            {/* Patient Details */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Patient Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="patientId" className="text-gray-300 text-sm">Patient ID</Label>
                  <Input
                    id="patientId"
                    placeholder="e.g., P001"
                    className="mt-2 bg-[#0f172a] border-slate-600 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <Label htmlFor="patientName" className="text-gray-300 text-sm">Patient Name</Label>
                  <Input
                    id="patientName"
                    placeholder="Enter patient name"
                    className="mt-2 bg-[#0f172a] border-slate-600 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>

            {/* Medicine */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">Medicine</h3>
              <Label htmlFor="medicine" className="text-gray-300 text-sm">Search Medicine</Label>
              <Input
                id="medicine"
                placeholder="Type to search medicines..."
                className="mt-2 bg-[#0f172a] border-slate-600 text-white placeholder:text-gray-500"
              />
            </div>

            {/* Dosage Timing */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">Dosage Timing</h3>
              <p className="text-sm text-gray-400 mb-4">Select when the medicine should be taken</p>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                {dosageTimes.map((time) => {
                  const Icon = time.icon
                  const isSelected = selectedTimes.includes(time.id)
                  
                  return (
                    <button
                      key={time.id}
                      type="button"
                      onClick={() => toggleTime(time.id)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        isSelected
                          ? "bg-blue-600/20 border-blue-600"
                          : "bg-[#0f172a] border-slate-600 hover:border-slate-500"
                      }`}
                    >
                      <Icon className={`w-6 h-6 mx-auto mb-2 ${isSelected ? "text-blue-400" : "text-gray-400"}`} />
                      <p className={`text-sm font-medium ${isSelected ? "text-white" : "text-gray-300"}`}>
                        {time.label}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{time.time}</p>
                    </button>
                  )
                })}
              </div>

              <div className="flex items-center justify-between">
                <Label className="text-gray-300 text-sm">Custom Times</Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-blue-400 hover:text-blue-300"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add Time
                </Button>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <Label htmlFor="notes" className="text-gray-300 text-sm">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Any special instructions..."
                rows={4}
                className="mt-2 bg-[#0f172a] border-slate-600 text-white placeholder:text-gray-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-base">
              Submit Prescription
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Right Side - Recent Prescriptions */}
      <Card className="bg-[#1e293b] border-slate-700">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Recent Prescriptions</h2>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>

          <div className="space-y-4">
            {recentPrescriptions.map((prescription) => (
              <Card key={prescription.id} className="bg-[#0f172a] border-slate-700">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-white font-semibold">{prescription.patientName}</h3>
                      <p className="text-xs text-gray-500">ID: {prescription.id}</p>
                    </div>
                    <p className="text-xs text-gray-500">{prescription.date}</p>
                  </div>

                  <div className="mb-3">
                    <p className="text-blue-400 font-medium">{prescription.medicine}</p>
                    <p className="text-sm text-gray-400">{prescription.dosage}</p>
                  </div>

                  <div className="flex gap-2">
                    {prescription.times.map((time) => (
                      <span
                        key={time}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}