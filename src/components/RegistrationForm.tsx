import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const RegistrationForm = () => {
  const securityQuestions = [
    "What was the name of your first pet?",
    "What is your mother's maiden name?",
    "What city were you born in?",
    "What was the name of your elementary school?",
    "What is your favorite movie?",
    "What was your childhood nickname?",
    "What street did you live on in third grade?",
    "What is your oldest sibling's birthday month?",
    "What was your first car?",
    "What was the first concert you attended?"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-secondary to-accent">
      <div className="container max-w-lg mx-auto">
        <Card className="p-8 bg-background/95 backdrop-blur-sm border-border/50 shadow-xl">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Create Account</h2>
              <p className="text-muted-foreground">Join Zennoma today</p>
            </div>
            
            <form className="space-y-4">
              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                <Input 
                  id="firstName"
                  type="text" 
                  placeholder="Enter your first name"
                  className="bg-background/50"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                <Input 
                  id="lastName"
                  type="text" 
                  placeholder="Enter your last name"
                  className="bg-background/50"
                />
              </div>
              
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email Address</Label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="Enter your email address"
                  className="bg-background/50"
                />
              </div>
              
              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">Password</Label>
                <Input 
                  id="password"
                  type="password" 
                  placeholder="Create a password"
                  className="bg-background/50"
                />
              </div>
              
              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-foreground">Confirm Password</Label>
                <Input 
                  id="confirmPassword"
                  type="password" 
                  placeholder="Confirm your password"
                  className="bg-background/50"
                />
              </div>

              {/* Security Questions */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-semibold text-foreground">Security Questions</h3>
                
                {/* Security Question 1 */}
                <div className="space-y-2">
                  <Label className="text-foreground">Security Question 1</Label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-border/60">
                      <SelectValue placeholder="Choose a security question" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border z-50">
                      {securityQuestions.map((question, index) => (
                        <SelectItem key={index} value={question} className="hover:bg-accent">
                          {question}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input 
                    type="text" 
                    placeholder="Your answer"
                    className="bg-background/50"
                  />
                </div>

                {/* Security Question 2 */}
                <div className="space-y-2">
                  <Label className="text-foreground">Security Question 2</Label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-border/60">
                      <SelectValue placeholder="Choose a security question" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border z-50">
                      {securityQuestions.map((question, index) => (
                        <SelectItem key={index} value={question} className="hover:bg-accent">
                          {question}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input 
                    type="text" 
                    placeholder="Your answer"
                    className="bg-background/50"
                  />
                </div>

                {/* Security Question 3 */}
                <div className="space-y-2">
                  <Label className="text-foreground">Security Question 3</Label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-border/60">
                      <SelectValue placeholder="Choose a security question" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border z-50">
                      {securityQuestions.map((question, index) => (
                        <SelectItem key={index} value={question} className="hover:bg-accent">
                          {question}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input 
                    type="text" 
                    placeholder="Your answer"
                    className="bg-background/50"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 mt-6"
              >
                Create Account
              </Button>
            </form>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <a href="/" className="text-primary hover:text-primary/80 underline">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RegistrationForm;