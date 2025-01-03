import zod, { z } from "zod";

export const adminLoginSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
});

export const studentLoginSchema = zod.object({
    rollNumber: zod.number(),
    password: zod.string().min(8)
});

export const changePasswordSchema = zod.object({
    currentPassword: zod.string().min(8),
    newPassword: zod.string().min(8),
    confirmPassword: zod.string().min(8)
});

export const gatepassSchema = zod.object({
    leaveType: zod.enum(["Day Out", "Night Out"]),
    reason: zod.string().optional(),
    outTime: zod.string(),
    outDate: zod.string(),
    inTime: zod.string(),
    inDate: zod.string().optional()
});

export const adminSignupSchema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(8)
})

export const studentSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string().optional(),
    email: zod.string().email(),
    rollNumber: zod.number(),
    fatherName: zod.string(),
    year: zod.number().int().min(2020).max(2024),
    campus: zod.enum(["CUP", "CUHP"]),
    course: zod.string()
});