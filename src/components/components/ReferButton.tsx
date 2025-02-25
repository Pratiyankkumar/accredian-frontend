"use client";

import { JSX, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

// Define TypeScript interfaces for our form data and errors
interface ReferralFormData {
  // Referrer details
  referrerName: string;
  referrerEmail: string;
  referrerPhone: string;

  // Referee details
  refereeName: string;
  refereeEmail: string;
  refereePhone: string;
  refereeCompany: string;
  refereePosition: string;

  // Additional info
  relationshipToReferee: string;
  message: string;
}

// Error object has the same keys as the form data
type FormErrors = Partial<Record<keyof ReferralFormData, string>>;

export default function ReferButton(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<ReferralFormData>({
    // Referrer details
    referrerName: "",
    referrerEmail: "",
    referrerPhone: "",

    // Referee details
    refereeName: "",
    refereeEmail: "",
    refereePhone: "",
    refereeCompany: "",
    refereePosition: "",

    // Additional info
    relationshipToReferee: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user types
    if (errors[name as keyof ReferralFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate each required field
    Object.entries(formData).forEach(([key, value]) => {
      const fieldKey = key as keyof ReferralFormData;

      // Skip validation for optional message field
      if (fieldKey === "message") return;

      if (!value.trim()) {
        newErrors[fieldKey] = "This field is required";
      }

      // Email validation
      if (
        (fieldKey === "referrerEmail" || fieldKey === "refereeEmail") &&
        value.trim()
      ) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors[fieldKey] = "Please enter a valid email address";
        }
      }

      // Phone validation
      if (
        (fieldKey === "referrerPhone" || fieldKey === "refereePhone") &&
        value.trim()
      ) {
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(value.replace(/\D/g, ""))) {
          newErrors[fieldKey] = "Please enter a valid 10-digit phone number";
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (): Promise<void> => {
    if (!validateForm()) return;

    setIsLoading(true); // Start loading

    try {
      console.log("Referral Form Data:", formData);

      const response = await fetch(
        "https://accredian-backend-8v0z.onrender.com/api/referral",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const res = await response.json();
      console.log(res);

      setOpen(false);
      // Reset form after successful submission
      setFormData({
        referrerName: "",
        referrerEmail: "",
        referrerPhone: "",
        refereeName: "",
        refereeEmail: "",
        refereePhone: "",
        refereeCompany: "",
        refereePosition: "",
        relationshipToReferee: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting referral form:", error);
      alert("Failed to submit the referral form. Please try again later.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <>
      <Button
        variant={"default"}
        className="bg-[#1A73E8] mt-3 hover:bg-[#1557B0]"
        onClick={() => setOpen(true)}
      >
        Refer Now
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px] bp4:h-[90vh] h-[90vh] overflow-y-scroll">
          <DialogHeader>
            <DialogTitle>Refer Someone</DialogTitle>
            <DialogDescription>
              Please provide both your details and the person you&#39;re
              referring.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="font-medium">Your Information (Referrer)</div>

            <div className="grid grid-cols-1 gap-3">
              <div className="space-y-2">
                <Label htmlFor="referrerName" className="text-sm">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="referrerName"
                  name="referrerName"
                  value={formData.referrerName}
                  onChange={handleChange}
                  className={errors.referrerName ? "border-red-500" : ""}
                />
                {errors.referrerName && (
                  <p className="text-xs text-red-500">{errors.referrerName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="referrerEmail" className="text-sm">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="referrerEmail"
                  name="referrerEmail"
                  type="email"
                  value={formData.referrerEmail}
                  onChange={handleChange}
                  className={errors.referrerEmail ? "border-red-500" : ""}
                />
                {errors.referrerEmail && (
                  <p className="text-xs text-red-500">{errors.referrerEmail}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="referrerPhone" className="text-sm">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="referrerPhone"
                  name="referrerPhone"
                  value={formData.referrerPhone}
                  onChange={handleChange}
                  className={errors.referrerPhone ? "border-red-500" : ""}
                />
                {errors.referrerPhone && (
                  <p className="text-xs text-red-500">{errors.referrerPhone}</p>
                )}
              </div>
            </div>

            <div className="font-medium pt-2 border-t mt-2">
              Referee Information (Person you&apos;re referring)
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="space-y-2">
                <Label htmlFor="refereeName" className="text-sm">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="refereeName"
                  name="refereeName"
                  value={formData.refereeName}
                  onChange={handleChange}
                  className={errors.refereeName ? "border-red-500" : ""}
                />
                {errors.refereeName && (
                  <p className="text-xs text-red-500">{errors.refereeName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="refereeEmail" className="text-sm">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="refereeEmail"
                  name="refereeEmail"
                  type="email"
                  value={formData.refereeEmail}
                  onChange={handleChange}
                  className={errors.refereeEmail ? "border-red-500" : ""}
                />
                {errors.refereeEmail && (
                  <p className="text-xs text-red-500">{errors.refereeEmail}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="refereePhone" className="text-sm">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="refereePhone"
                  name="refereePhone"
                  value={formData.refereePhone}
                  onChange={handleChange}
                  className={errors.refereePhone ? "border-red-500" : ""}
                />
                {errors.refereePhone && (
                  <p className="text-xs text-red-500">{errors.refereePhone}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="refereeCompany" className="text-sm">
                  Company <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="refereeCompany"
                  name="refereeCompany"
                  value={formData.refereeCompany}
                  onChange={handleChange}
                  className={errors.refereeCompany ? "border-red-500" : ""}
                />
                {errors.refereeCompany && (
                  <p className="text-xs text-red-500">
                    {errors.refereeCompany}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="refereePosition" className="text-sm">
                  Position <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="refereePosition"
                  name="refereePosition"
                  value={formData.refereePosition}
                  onChange={handleChange}
                  className={errors.refereePosition ? "border-red-500" : ""}
                />
                {errors.refereePosition && (
                  <p className="text-xs text-red-500">
                    {errors.refereePosition}
                  </p>
                )}
              </div>
            </div>

            <div className="font-medium pt-2 border-t mt-2">
              Additional Information
            </div>

            <div className="space-y-2">
              <Label htmlFor="relationshipToReferee" className="text-sm">
                Your Relationship to Referee{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="relationshipToReferee"
                name="relationshipToReferee"
                value={formData.relationshipToReferee}
                onChange={handleChange}
                className={errors.relationshipToReferee ? "border-red-500" : ""}
                placeholder="Colleague, Friend, Former Manager, etc."
              />
              {errors.relationshipToReferee && (
                <p className="text-xs text-red-500">
                  {errors.relationshipToReferee}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm">
                Additional Message (Optional)
              </Label>
              <Input
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any additional information you'd like to share"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="bg-[#1A73E8] hover:bg-[#1557B0]"
            >
              {isLoading ? "Submitting.." : "Submit Referral"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
