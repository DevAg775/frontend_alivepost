

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectGroup ,SelectItem, SelectLabel , SelectTrigger, SelectValue } from "@/components/ui/select"
import { doctorSpecializations } from "@/lib/constants"




export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    userType: "",  // Add this for dropdown
    password: "",
    confirmPassword: ""
  })
   const [specialization, setSpecialization] = useState("")
    const [isLoading, setIsLoading] = useState(false)

  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match")
      return
    }

    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Handle select change separately
  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      userType: value
    })
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Enter your details to register</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile No.</Label>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            {/* Dropdown for User Type */}
          
             <div className="grid gap-2">
  <Label htmlFor="specialization">Specialization</Label>
  <Select
  value={specialization}
  onValueChange={setSpecialization}
  disabled={isLoading}
>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select your specialization" />
  </SelectTrigger>
  <SelectContent className="max-h-[300px]">
    <SelectGroup>
      <SelectLabel>General & Primary Care</SelectLabel>
      <SelectItem value="general_practitioner">General Practitioner</SelectItem>
      <SelectItem value="pediatrician">Pediatrician</SelectItem>
      <SelectItem value="emergency_medicine">Emergency Medicine</SelectItem>
    </SelectGroup>
    
    <SelectGroup>
      <SelectLabel>Surgery & Orthopedics</SelectLabel>
      <SelectItem value="orthopedic">Orthopedic Surgeon</SelectItem>
      <SelectItem value="neurologist">Neurologist</SelectItem>
    </SelectGroup>
    
    <SelectGroup>
      <SelectLabel>Heart & Lungs</SelectLabel>
      <SelectItem value="cardiologist">Cardiologist</SelectItem>
      <SelectItem value="pulmonologist">Pulmonologist</SelectItem>
    </SelectGroup>
    
    <SelectGroup>
      <SelectLabel>Skin, Eyes & ENT</SelectLabel>
      <SelectItem value="dermatologist">Dermatologist</SelectItem>
      <SelectItem value="ophthalmologist">Ophthalmologist</SelectItem>
      <SelectItem value="ent">ENT Specialist</SelectItem>
      <SelectItem value="dentist">Dentist</SelectItem>
    </SelectGroup>
    
    <SelectGroup>
      <SelectLabel>Women & Children</SelectLabel>
      <SelectItem value="gynecologist">Gynecologist</SelectItem>
    </SelectGroup>
    
    <SelectGroup>
      <SelectLabel>Internal Medicine</SelectLabel>
      <SelectItem value="gastroenterologist">Gastroenterologist</SelectItem>
      <SelectItem value="endocrinologist">Endocrinologist</SelectItem>
      <SelectItem value="nephrologist">Nephrologist</SelectItem>
      <SelectItem value="urologist">Urologist</SelectItem>
      <SelectItem value="rheumatologist">Rheumatologist</SelectItem>
    </SelectGroup>
    
    <SelectGroup>
      <SelectLabel>Mental Health & Therapy</SelectLabel>
      <SelectItem value="psychiatrist">Psychiatrist</SelectItem>
      <SelectItem value="physiotherapist">Physiotherapist</SelectItem>
    </SelectGroup>
    
    <SelectGroup>
      <SelectLabel>Diagnostics & Treatment</SelectLabel>
      <SelectItem value="oncologist">Oncologist</SelectItem>
      <SelectItem value="radiologist">Radiologist</SelectItem>
      <SelectItem value="pathologist">Pathologist</SelectItem>
      <SelectItem value="anesthesiologist">Anesthesiologist</SelectItem>
      <SelectItem value="allergist">Allergist</SelectItem>
    </SelectGroup>
    
    <SelectGroup>
      <SelectLabel>Other</SelectLabel>
      <SelectItem value="other">Other</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
</div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            
            {error && <p className="text-sm text-red-500">{error}</p>}
            
            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <a href="/login" className="text-primary hover:underline">
              Login
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}