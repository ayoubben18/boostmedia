"use client";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "./ui/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type Inputs = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: index * 0.2,
      },
    }),
  };

  async function sendEmail(name: string, email: string) {
    emailjs.init({ publicKey: process.env.NEXT_PUBLIC_OPTIONS_KEY });
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        { fullname: name, sender: email },
        process.env.NEXT_PUBLIC_OPTIONS_KEY
      );
      if (response.status === 200) {
        toast({ description: "Message Sent successfully" });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description:
            "The service might be down for the moment please try again later or contact us through LinkedIn.",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          "The service might be down for the moment please try again later or contact us through LinkedIn.",
      });
    }
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    await sendEmail(data.name, data.email);
    reset();
    setLoading(false);
  };

  return (
    <motion.section
      className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800"
      id="form"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-xl space-y-6">
          <motion.div
            className="space-y-2 text-center"
            variants={itemVariants}
            custom={0}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </motion.div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <motion.div
                className="space-y-1.5"
                variants={itemVariants}
                custom={1}
              >
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-500">This field is required</p>
                )}
              </motion.div>
              <motion.div
                className="space-y-1.5"
                variants={itemVariants}
                custom={2}
              >
                <Label htmlFor="email">Phone Number / Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email or phone number"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500">This field is required</p>
                )}
              </motion.div>
            </div>

            <motion.div variants={itemVariants} custom={5}>
              <Button className="w-full" type="submit" disabled={loading}>
                Submit
              </Button>
            </motion.div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
