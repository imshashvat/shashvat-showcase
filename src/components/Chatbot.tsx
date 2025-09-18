import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatbotResponse {
  keywords: string[];
  response: string;
  followUp?: string[];
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatbotResponses: ChatbotResponse[] = [
    {
      keywords: ['hello', 'hi', 'hey', 'greetings'],
      response: "Hi there! 👋 I'm Shashvat's personal assistant. I can help you learn more about him, his skills, projects, and experience. What would you like to know?",
      followUp: ['Tell me about Shashvat', 'What are his skills?', 'Show me his projects']
    },
    {
      keywords: ['who', 'about', 'tell me about', 'introduce'],
      response: "Shashvat Tripathi is a passionate Computer Science Engineering student with a deep love for technology and problem-solving. He specializes in full-stack web development and is always eager to learn new technologies and create innovative solutions.",
      followUp: ['What technologies does he use?', 'Where is he studying?', 'What projects has he built?']
    },
    {
      keywords: ['skills', 'technologies', 'tech stack', 'programming', 'languages'],
      response: "Shashvat has expertise in:\n• Frontend: HTML5, CSS3, JavaScript, React.js, TypeScript\n• Backend: Node.js, Express.js, MongoDB, MySQL\n• Programming: Python, C++, C, Java\n• Tools: Git & GitHub, VS Code, Figma, Linux, Docker\n• Emerging Tech: Gen AI, Machine Learning, Prompt Engineering",
      followUp: ['What projects has he built?', 'Tell me about his experience', 'How can I contact him?']
    },
    {
      keywords: ['projects', 'work', 'portfolio', 'built', 'developed'],
      response: "Here are some of Shashvat's notable projects:\n• Amazon Clone - Full e-commerce platform with React & Node.js\n• Portfolio Website - Responsive showcase with modern animations\n• Task Management App - Productive app with drag-and-drop features\n• Weather Dashboard - Real-time weather with interactive charts\n• Chat Application - Real-time messaging with Socket.io\n• Blog Platform - Modern blogging system with rich editor",
      followUp: ['Tell me about the Amazon Clone', 'What technologies did he use?', 'Can I see the code?']
    },
    {
      keywords: ['amazon clone', 'e-commerce', 'amazon project'],
      response: "The Amazon Clone is one of Shashvat's featured projects! It's a full-featured e-commerce platform built with React and Node.js, featuring user authentication, product catalog, shopping cart, and payment integration. It demonstrates his full-stack development skills.",
      followUp: ['What other projects has he built?', 'What technologies does he know?', 'How can I contact him?']
    },
    {
      keywords: ['education', 'study', 'college', 'university', 'degree'],
      response: "Shashvat is currently pursuing a B.Tech in Computer Science Engineering (2024-2028). He completed his Higher Secondary education in Science Stream (2021-2023). He's passionate about continuous learning and staying updated with the latest technologies.",
      followUp: ['What are his achievements?', 'What skills does he have?', 'Tell me about his projects']
    },
    {
      keywords: ['contact', 'email', 'phone', 'reach', 'hire', 'collaborate'],
      response: "You can reach Shashvat through:\n📧 Email: shashvatt68@gmail.com\n📱 Phone: +91 7459071817\n🔗 LinkedIn: linkedin.com/in/shashvat-tripathi-6518aa332/\n💻 GitHub: github.com/imshashvat\n\nHe's always open to discussing new opportunities and interesting projects!",
      followUp: ['Tell me about his skills', 'What projects has he worked on?', 'What technologies does he know?']
    },
    {
      keywords: ['experience', 'work experience', 'job', 'internship'],
      response: "Shashvat is currently a student focused on building his skills through personal projects and continuous learning. He has hands-on experience with full-stack development, having built multiple projects including an Amazon clone, task management app, and various web applications.",
      followUp: ['What projects has he built?', 'What are his technical skills?', 'How can I contact him?']
    },
    {
      keywords: ['github', 'code', 'repository', 'open source'],
      response: "You can find Shashvat's code and projects on his GitHub profile: github.com/imshashvat. He's active in open-source contributions and shares his learning journey through various repositories. Check out his projects to see his coding style and technical expertise!",
      followUp: ['Tell me about his projects', 'What programming languages does he know?', 'How can I contact him?']
    },
    {
      keywords: ['achievements', 'accomplishments', 'awards'],
      response: "Some of Shashvat's key achievements include:\n• Built a full-featured Amazon Clone with React & Node.js\n• Proficient in multiple programming languages and frameworks\n• Active contributor to open-source projects\n• Strong foundation in both frontend and backend development\n• Passionate about AI and emerging technologies",
      followUp: ['Tell me more about his skills', 'What projects has he built?', 'How can I contact him?']
    },
    {
      keywords: ['location', 'where', 'based', 'from'],
      response: "Shashvat is based in India. He's open to remote opportunities and collaborations from anywhere in the world!",
      followUp: ['How can I contact him?', 'What are his skills?', 'Tell me about his projects']
    },
    {
      keywords: ['thank', 'thanks', 'bye', 'goodbye'],
      response: "You're welcome! 😊 Thanks for learning about Shashvat. If you have any more questions or want to get in touch with him, feel free to ask. Have a great day!",
      followUp: ['Contact Shashvat', 'Tell me about his projects', 'What are his skills?']
    }
  ];

  const getResponse = (userInput: string): ChatbotResponse => {
    const input = userInput.toLowerCase();
    
    // Find the best matching response
    for (const response of chatbotResponses) {
      if (response.keywords.some(keyword => input.includes(keyword))) {
        return response;
      }
    }
    
    // Default response if no match found
    return {
      keywords: ['default'],
      response: "I'd love to help you learn more about Shashvat! You can ask me about his skills, projects, education, contact information, or anything else you'd like to know about him.",
      followUp: ['Tell me about Shashvat', 'What are his skills?', 'Show me his projects', 'How can I contact him?']
    };
  };

  const addMessage = (text: string, isBot: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setInputValue('');
    addMessage(userMessage, false);

    setIsTyping(true);
    
    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(userMessage);
      addMessage(response.response, true);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    addMessage(reply, false);
    setIsTyping(true);
    
    setTimeout(() => {
      const response = getResponse(reply);
      addMessage(response.response, true);
      setIsTyping(false);
    }, 1000);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message when chat opens
      setTimeout(() => {
        addMessage("Hello! 👋 I'm here to help you learn more about Shashvat Tripathi. What would you like to know about him?", true);
      }, 500);
    }
  }, [isOpen]);

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-background border border-border/50 rounded-xl shadow-elegant z-50 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-primary p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={16} />
              </div>
              <div>
                <h3 className="font-semibold">Shashvat's Assistant</h3>
                <p className="text-xs opacity-90">Ask me anything about Shashvat!</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                {message.isBot && (
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed whitespace-pre-line ${
                    message.isBot
                      ? 'bg-card text-foreground border border-border/50'
                      : 'bg-primary text-primary-foreground ml-auto'
                  }`}
                >
                  {message.text}
                </div>
                {!message.isBot && (
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={16} className="text-accent" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Bot size={16} className="text-primary" />
                </div>
                <div className="bg-card border border-border/50 p-3 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Reply Buttons */}
          {messages.length > 0 && !isTyping && (
            <div className="p-2 border-t border-border/50">
              <div className="flex flex-wrap gap-2">
                {['Tell me about Shashvat', 'His skills?', 'His projects?', 'Contact info?'].map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors duration-200"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Input */}
          <div className="p-4 border-t border-border/50 bg-card/50">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me about Shashvat..."
                className="flex-1 bg-background border-border/50 focus:border-primary"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;