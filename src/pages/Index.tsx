import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const menuItems = [
    {
      title: "Информационный лист",
      url: "https://disk.yandex.ru/i/cPt6Clb5QmMzpA",
      icon: "FileText"
    },
    {
      title: "Регистрация на мероприятие",
      url: "https://forms.yandex.ru/u/68d62727d046882c03356750",
      icon: "UserPlus"
    },
    {
      title: "Презентация",
      url: "https://disk.yandex.ru/i/hM7d702_5pYtvg",
      icon: "Presentation"
    },
    {
      title: "Тест по окончании конференции",
      url: "https://forms.yandex.ru/cloud/68d65982493639503d5c2f6a",
      icon: "ClipboardCheck"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-secondary/20">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-block mb-6 px-8 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
            <p className="text-sm md:text-base text-muted-foreground font-medium tracking-wide">
              Психология материнства
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Онлайн-конференция<br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              «Эмоциональный интеллект мамы»
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed">
              В рамках онлайн-встречи "Эмоциональный интеллект мамы" участницы курса 
              "Психология материнства" смогут глубже разобраться в своих эмоциях и научиться 
              распознавать эмоциональные состояния своих детей. Мероприятие будет включать 
              в себя интерактивные задания, обсуждения и практические упражнения, которые 
              помогут мамам развить навыки эмоционального интеллекта.
            </p>
          </div>
        </header>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="p-6 md:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-primary/30 rounded-3xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon name={item.icon} className="text-white" size={28} />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <Icon name="ExternalLink" className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                  </div>
                </Card>
              </a>
            ))}
          </div>

          <Card className="overflow-hidden rounded-3xl shadow-2xl bg-white/80 backdrop-blur-sm border-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-4">
                    <Icon name="Heart" className="text-primary" size={20} />
                    <span className="text-sm font-medium text-foreground">Забота и понимание</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Развивайте эмоциональный интеллект вместе с нами
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  Научитесь лучше понимать себя и своего ребёнка, создавая крепкую 
                  эмоциональную связь и гармоничные отношения в семье.
                </p>
              </div>
              
              <div className="relative h-64 md:h-auto">
                <img
                  src="/img/6a0d9615-f013-4965-9f19-500ad43f1bf1.jpg"
                  alt="Мама с ребёнком"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </Card>
        </div>

        <footer className="text-center pt-8 border-t border-foreground/10">
          <div className="inline-block px-8 py-6 bg-white/60 backdrop-blur-sm rounded-3xl shadow-sm">
            <p className="text-foreground/70 mb-3 text-sm md:text-base">
              Будем рады вас видеть на онлайн-встрече!
            </p>
            <div className="space-y-1">
              <p className="text-foreground/80 font-medium">Контакты для связи:</p>
              <p className="text-foreground/70">
                Организатор Белкова Алиса{" "}
                <a href="tel:89125945459" className="hover:text-primary transition-colors font-medium">
                  89125945459
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
