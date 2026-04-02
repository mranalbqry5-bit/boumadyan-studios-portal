import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Loader2, CheckCircle, Users } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const emailSchema = z.string().trim().email("Please enter a valid email").max(255);

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { data: count, refetch } = useQuery({
    queryKey: ["waitlist-count"],
    queryFn: async () => {
      const { count, error } = await supabase
        .from("waitlist")
        .select("*", { count: "exact", head: true });
      if (error) throw error;
      return count ?? 0;
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("waitlist").insert({ email: result.data });
      if (error) {
        if (error.code === "23505") {
          toast.info("You're already on the waitlist!");
          setSubmitted(true);
        } else {
          throw error;
        }
      } else {
        setSubmitted(true);
        refetch();
        toast.success("You're on the list!");
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const displayCount = (count ?? 0) + 12847; // Base count for social proof

  return (
    <section id="waitlist" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        <div className="text-center mb-10">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-3">Early Access</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">
            <span className="gradient-text">Pre-Register Now</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Be the first to drop into the arena. Early registrants receive an exclusive legendary skin and priority access.
          </p>
        </div>

        <div className="glass rounded-2xl p-8 box-glow">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <CheckCircle className="w-16 h-16 text-primary mx-auto animate-pulse-glow" />
              <h3 className="text-2xl font-bold text-foreground">Success! You're on the list</h3>
              <p className="text-muted-foreground text-sm">We'll notify you when early access begins. Get ready for battle.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-secondary border-border h-12"
                  required
                />
              </div>
              <Button variant="hero" className="h-12 px-8 shrink-0" disabled={loading}>
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Join Waitlist"}
              </Button>
            </form>
          )}
        </div>

        {/* Social proof counter */}
        <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground">
          <Users className="w-4 h-4 text-primary" />
          <span className="text-sm">
            Join <span className="text-primary font-bold">{displayCount.toLocaleString()}</span> players already on the waitlist
          </span>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
