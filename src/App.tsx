import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import { useState } from "react";

import urist from "./assets/urist.png";
import remont from "./assets/remont.png";
import clining from "./assets/clining.png";
import himka from "./assets/himka.png";
import products from "./assets/products.png";
import creditRemont from "./assets/credit-remont.png";
import designProject from "./assets/design-project.png";
import remont1 from "./assets/remont1.png";
import pokupki from "./assets/pokupki.png";
import pereezd from "./assets/pereezd.png";
import tech from "./assets/tech.png";

import buySell1 from "./assets/buy-sell-1.png";
import buySell2 from "./assets/buy-sell-2.png";
import buySell3 from "./assets/buy-sell-3.png";
import buySell4 from "./assets/buy-sell-4.png";
import buySell5 from "./assets/buy-sell-5.png";
import buySell6 from "./assets/buy-sell-6.png";
import buySell7 from "./assets/buy-sell-7.png";

import rent1 from "./assets/rent-1.png";
import rent2 from "./assets/rent-2.png";
import rent3 from "./assets/rent-3.png";
import rent4 from "./assets/rent-4.png";
import rent5 from "./assets/rent-5.png";
import rent6 from "./assets/rent-6.png";

import kabala1 from "./assets/kabala-1.png";
import kabala2 from "./assets/kabala-2.png";
import kabala3 from "./assets/kabala-3.png";
import kabala4 from "./assets/kabala-4.png";
import kabala5 from "./assets/kabala-5.png";
import kabala6 from "./assets/kabala-6.png";
import kabala7 from "./assets/kabala-7.png";

import consult1 from "./assets/consult-1.png";
import consult2 from "./assets/consult-2.png";
import consult3 from "./assets/consult-3.png";
import consult4 from "./assets/consult-4.png";

import sesyriti1 from "./assets/sesyriti-1.png";
import sesyriti2 from "./assets/sesyriti-2.png";
import sesyriti3 from "./assets/sesyriti-3.png";
import sesyriti4 from "./assets/sesyriti-4.png";
import sesyriti5 from "./assets/sesyriti-5.png";
import sesyriti6 from "./assets/sesyriti-6.png";

import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { Swiper, SwiperSlide } from "swiper/react";
import { BottomSheet } from "@alfalab/core-components/bottom-sheet";

interface Service {
  title: string;
  image: string;
  modalTitle: string;
  modalText: string[];
  swiperText: string;
}

interface Services {
  swiperText: string;
  halfWithCount: number;
  items: Service[];
}

const services: Array<Services> = [
  {
    halfWithCount: 4,
    swiperText: "Бытовые сервисы",
    items: [
      {
        swiperText: "Бытовые сервисы",
        title: "Мастер на час",
        image: urist,
        modalTitle: "Мастер на час",
        modalText: [
          "Вы сможете оставить заявку на выполнение мелких бытовых задач через наш сервис. Мы подберем подходящего мастера, который сможет приехать в удобное для вас время.",
          "Все мастера проходят тщательную проверку, поэтому вы можете быть уверены в качестве работы.",
        ],
      },
      {
        swiperText: "Бытовые сервисы",
        title: "Клининг",
        image: clining,
        modalTitle: "Клининг",
        modalText: [
          "Вы сможете выбрать тип уборки, указать удобную дату и время. Команда профессионалов проведет уборку согласно вашему запросу.",
        ],
      },
      {
        swiperText: "Бытовые сервисы",
        title: "Химчистка",
        image: himka,
        modalTitle: "Химчистка",
        modalText: [
          "Вы сможете оставить заявку на услуги химчистки, оформить и отслеживать заказ.",
        ],
      },
      {
        swiperText: "Бытовые сервисы",
        title: "Заказ продуктов",
        image: products,
        modalTitle: "Заказ продуктов",
        modalText: [
          "Вы сможете выбрать и заказать продукты прямо в нашем приложении. Мы организуем весь процесс и доставим до вашей двери.",
        ],
      },
    ],
  },
  {
    halfWithCount: 4,
    swiperText: "Ремонт",
    items: [
      {
        swiperText: "Ремонт",
        title: "Накопить на ремонт",
        image: remont,
        modalTitle: "Накопить на ремонт",
        modalText: [
          "Вы можете создать цель накопления денег на ремонт. Мы поможем  контролировать расходы и сбережения, а также предложим советы по оптимизации бюджета.",
        ],
      },
      {
        swiperText: "Ремонт",
        title: "Кредит на ремонт",
        image: creditRemont,
        modalTitle: "Кредит на ремонт",
        modalText: [
          "Вы сможете подать заявку на кредит, мы поможем подобрать лучшие условия и оформим кредит максимально быстро.",
        ],
      },
      {
        swiperText: "Ремонт",
        title: "Дизайн-проект",
        image: designProject,
        modalTitle: "Дизайн-проект",
        modalText: [
          "Вы сможет заказать дизайн-проект по вашим предпочтениям и бюджету. Это поможет избежать ошибок при ремонте и создать интерьер своей мечты.",
        ],
      },
      {
        swiperText: "Ремонт",
        title: "Ремонт",
        image: remont1,
        modalTitle: "Ремонт",
        modalText: [
          "Вы сможете выбрать ремонтную бригаду, общаться с дизайнерами и специалистами по ремонту и отслеживать ход выполняемых работ.",
        ],
      },
      {
        swiperText: "Ремонт",
        title: "Покупки для ремонта и дома",
        image: pokupki,
        modalTitle: "Покупки для ремонта и дома",
        modalText: [
          "Широкий ассортимент товаров для ремонта и дома, включая строительные материалы, мебель, декор и многое другое. Всё это можно выгодно купить в одном месте, сэкономив время и силы.",
        ],
      },
      {
        swiperText: "Ремонт",
        title: "Переезд",
        image: pereezd,
        modalTitle: "Переезд",
        modalText: [
          "Широкий ассортимент товаров для ремонта и дома, включая строительные материалы, мебель, декор и многое другое. Всё это можно выгодно купить в одном месте, сэкономив время и силы.",
        ],
      },
      {
        swiperText: "Ремонт",
        title: "Тех.надзор при строительстве дома",
        image: tech,
        modalTitle: "Технический надзор",
        modalText: [
          "Вы сможете заказать услугу технического надзора. К вам направится специалист, который проконтролирует ход строительных и ремонтных работ, своевременно выявит ошибки и поможет их исправить, экономя ваши деньги и нервы.",
        ],
      },
    ],
  },
  {
    halfWithCount: 4,
    swiperText: "Покупка-продажа недвижимости",
    items: [
      {
        swiperText: "Покупка-продажа недвижимости",
        title: "Найти риелтора",
        image: buySell1,
        modalTitle: "Найти риелтора",
        modalText: [
          "Вы сможете заполнить форму запроса на поиск риелтора, указав свои требования и цели. Мы подберём для вас проверенного эксперта с хорошей репутацией и большим опытом работы. ",
        ],
      },
      {
        swiperText: "Покупка-продажа недвижимости",
        title: "Оценить стоимость квартиры",
        image: buySell2,
        modalTitle: "Оценка стоимости жилья",
        modalText: [
          "Оцените стоимость недвижимости онлайн, основываясь на анализе рынка и сравнении с аналогичными объектами.",
        ],
      },
      {
        swiperText: "Покупка-продажа недвижимости",
        title: "Провести сделку",
        image: buySell3,
        modalTitle: "Проведение сделки",
        modalText: [
          "Мы поможем вам провести сделку купли-продажи недвижимости, обеспечивая юридическое сопровождение, подготовку документов и контроль всех этапов процесса.",
        ],
      },
      {
        swiperText: "Покупка-продажа недвижимости",
        title: "Налоговый вычет",
        image: buySell4,
        modalTitle: "Налоговый вычет",
        modalText: [
          "Вы можете обратиться к нам за консультацией по получению налогового вычета при покупке недвижимости.",
          "Наши специалисты помогут правильно заполнить документы, чтобы избежать ошибок.",
        ],
      },
      {
        swiperText: "Покупка-продажа недвижимости",
        title: "Подобрать объект недвижимости",
        image: buySell5,
        modalTitle: "Подбор объекта недвижимости",
        modalText: [
          "Мы подберём для вас подходящие варианты. Вы можете просмотреть подробную информацию о каждом объекте и запланировать просмотры.",
        ],
      },
      {
        swiperText: "Покупка-продажа недвижимости",
        title: "Купить, продать квартиру в ипотеке или продать из под залога",
        image: buySell6,
        modalTitle: "Покупка/продажа квартиры в ипотеке",
        modalText: [
          "Мы поможем купить или продать квартиру, находящуюся в ипотеке или залоге. Обеспечиваем юридическое сопровождение, все формальности будут соблюдены. Сделка состоится в соответствии с законодательством.",
        ],
      },
      {
        swiperText: "Покупка-продажа недвижимости",
        title: "Приёмка квартиры",
        image: buySell7,
        modalTitle: "Приёмка квартиры",
        modalText: [
          "Вы можете заказать услугу приёмки квартиры после строительства или ремонта. Специалисты проведут тщательный осмотр, документально фиксируя все недочеты и дефекты.",
          "Это позволит требовать компенсацию или исправления дефектов от застройщика или подрядчика.",
        ],
      },
    ],
  },
  {
    halfWithCount: 4,
    swiperText: "Аренда",
    items: [
      {
        swiperText: "Аренда",
        title: "Снять посуточно",
        image: rent1,
        modalTitle: "Снять посуточно",
        modalText: [
          "Организуем быстрое и удобное решение вопроса временного проживания. Вы сможете выбрать подходящую квартиру или комнату, забронировать ее в разделе Альфа-Дом и заселиться в кратчайшие сроки.",
        ],
      },
      {
        swiperText: "Аренда",
        title: "Сдать посуточно",
        image: rent2,
        modalTitle: "Сдать посуточно",
        modalText: [
          "Поможем привлечь клиентов, организуем бронирование и обеспечим безопасное заключение договоров. Вы сможете получать доход от сдачи без лишних забот.",
        ],
      },
      {
        swiperText: "Аренда",
        title: "Снять надолго",
        image: rent3,
        modalTitle: "Снять надолго",
        modalText: [
          "У вас будет доступ к базе объявлений, где сможете выбрать подходящий вариант и связаться с владельцем. Мы поможем проверить владельца и составить договор аренды, чтобы защитить ваши права как арендатора.",
        ],
      },
      {
        swiperText: "Аренда",
        title: "Сдать надолго",
        image: rent4,
        modalTitle: "Сдать надолго",
        modalText: [
          "Поможем легко и удобно найти надёжных арендаторов на длительный срок в разделе Альфа-Дом. Мы обеспечиваем безопасность сделок и помогаем заключить договор аренды, защищая ваши интересы.",
        ],
      },
      {
        swiperText: "Аренда",
        title: "Оценка недвижимости: за сколько сдать и снять",
        image: rent5,
        modalTitle: "Оценка недвижимости",
        modalText: [
          "Оцените стоимость аренды или сдачи недвижимости онлайн. Это поможет вам избежать недополучения прибыли или переплаты.",
        ],
      },
      {
        swiperText: "Аренда",
        title: "Подготовка квартиры к сдаче",
        image: rent6,
        modalTitle: "Подготовка квартиры к сдаче",
        modalText: [
          "Мы организуем уборку, мелкий ремонт, замену замков и другие необходимые работы, чтобы квартира была готова к приёму арендаторов: выглядела привлекательно и соответствовала стандартам.",
        ],
      },
    ],
  },
  {
    halfWithCount: 2,
    swiperText: "Ипотека",
    items: [
      {
        swiperText: "Ипотека",
        title: "Страхование ипотеки",
        image: kabala1,
        modalTitle: "Страхование ипотеки",
        modalText: [
          "Спокойствие и защита от возможных рисков, связанных с невыплатой ипотеки. Страховой полис обеспечит финансовую поддержку в случае потери работы, болезни или других форс-мажорных обстоятельств.",
        ],
      },
      {
        swiperText: "Ипотека",
        title: "Оценка",
        image: kabala2,
        modalTitle: "Оценка недвижимости",
        modalText: [
          "Наши эксперты проведут оценку стоимости объекта, основываясь на анализе рынка и сравнении с аналогичными объектами.",
        ],
      },
      {
        swiperText: "Ипотека",
        title: "Консультация по ипотеке",
        image: kabala3,
        modalTitle: "Консультация по ипотеке",
        modalText: [
          "Наш ипотечный специалист ответит на все вопросы, связанные с оформлением ипотеки, расчётом платежей и предложит оптимальное решение.",
        ],
      },
      {
        swiperText: "Ипотека",
        title: "Снятие обременения",
        image: kabala4,
        modalTitle: "Снятие обременения",
        modalText: [
          "Быстрое и правильное снятие обременения с вашей недвижимости. Мы избавим вас от бюрократических процедур и гарантируем соблюдение всех юридических норм.",
        ],
      },
      {
        swiperText: "Ипотека",
        title: "Подача заявки на ипотеку или рефенансирование",
        image: kabala5,
        modalTitle: "Подача заявки на ипотеку",
        modalText: [
          "Упрощенный процесс подачи заявки на ипотеку или рефинансирование. Мы обработаем все документы и свяжемся с вами для уточнения деталей и согласования условий.",
        ],
      },
      {
        swiperText: "Ипотека",
        title: "Доступные меры гос. поддержки: информирование",
        image: kabala6,
        modalTitle: "Информирование о гос. поддержке",
        modalText: [
          "Возможность узнать о существующих программах помощи и субсидий, которые могут существенно облегчить приобретение или улучшение жилищных условий.",
        ],
      },
      {
        swiperText: "Ипотека",
        title: "Форум: Сообщество пользователей и экспертов",
        image: kabala7,
        modalTitle: "Доступ к сообществу",
        modalText: [
          "Постоянный доступ к актуальной информации и поддержке. Вы сможете обсудить любые вопросы, касающиеся недвижимости, ремонта, строительства и многого другого.",
        ],
      },
    ],
  },
  {
    halfWithCount: 0,
    swiperText: "Консультации",
    items: [
      {
        swiperText: "Консультации",
        title: "Помощь юриста",
        image: consult1,
        modalTitle: "Консультация юриста",
        modalText: [
          "Профессиональная юридическая помощь, которая поможет вам избежать ошибок и защитить свои интересы в правовых спорах.",
        ],
      },
      {
        swiperText: "Консультации",
        title: "Консультации риелтора",
        image: consult2,
        modalTitle: "Консультация риелтора",
        modalText: [
          "Вы сможете записаться на консультацию с риелтором. Он поможет вам разобраться в текущих тенденциях рынка, выбрать оптимальный вариант недвижимости и провести успешную сделку.",
        ],
      },
      {
        swiperText: "Консультации",
        title: "Социальная сеть для общения на темы недвижимости",
        image: consult3,
        modalTitle: "Социальная сеть",
        modalText: [
          "Общение и доступ к полезной информации на специальном форуме. Вы сможете узнавать последние новости рынка недвижимости, обмениваться идеями и находить новые возможности для инвестиций.",
        ],
      },
      {
        swiperText: "Консультации",
        title: "Правовой помощник и риелтор по подписке",
        image: consult4,
        modalTitle: "Подписка на консультации",
        modalText: [
          "Вы можете подписаться на пакет услуг, который включает доступ к экспертам в области недвижимости. Специалисты будут готовы ответить на ваши вопросы и оказать необходимую поддержку в любое время.",
        ],
      },
    ],
  },
  {
    halfWithCount: 0,
    swiperText: "Управление домом и безопасность",
    items: [
      {
        swiperText: "Управление домом и безопасность",
        title: "Голосования собственников",
        image: sesyriti1,
        modalTitle: "Голосования собственников",
        modalText: [
          "Участвуйте в голосованиях собственников прямо в нашем приложении. Ваши голоса будут учтены, и вы сможете внести свой вклад в улучшение условий проживания в правовых спорах.",
        ],
      },
      {
        swiperText: "Управление домом и безопасность",
        title: "Уведомления о доме: ремонты, кап.ремонты, отключения воды",
        image: sesyriti2,
        modalTitle: "Уведомления о доме",
        modalText: [
          "Всегда актуальная информация о состоянии вашего дома и предстоящих изменениях.",
          "Вы будете заранее знать об отключении воды, ремонтных работах и сможете планировать своё время.",
        ],
      },
      {
        swiperText: "Управление домом и безопасность",
        title: "Заявка в управляющую компанию",
        image: sesyriti3,
        modalTitle: "Заявки в УК",
        modalText: [
          "Вы сможете подать заявку через наш сервис без личного визита в офис управляющей компании.",
        ],
      },
      {
        swiperText: "Управление домом и безопасность",
        title: "Страховая подписка: пожары, наводнения",
        image: sesyriti4,
        modalTitle: "Страховая подписка",
        modalText: [
          "Подписка на страхование вашего имущества от непредвиденных обстоятельств. В случае наступления страхового случая вы получите компенсацию, которая поможет восстановить утраченное.",
        ],
      },
      {
        swiperText: "Управление домом и безопасность",
        title: "Страхование недвижимости",
        image: sesyriti5,
        modalTitle: "Страхование недвижимости",
        modalText: [
          "Спокойствие и уверенность в безопасности вашего имущества — с нашим страховым полисом. В случае повреждения или утраты недвижимости вы получите возмещение ущерба.",
        ],
      },
      {
        swiperText: "Управление домом и безопасность",
        title: "Защита от мошеннических действий с недвижимостью",
        image: sesyriti6,
        modalTitle: "Защита от мошенников",
        modalText: [
          "Предлагаем комплекс мер по защите вашей недвижимости от мошенников. В это входит юридическая проверка документов, мониторинг регистрационных действий и другие превентивные меры.",
        ],
      },
    ],
  },
];

const getRandomServices = (arr: Array<Services>) => {
  return arr.sort(() => Math.random() - 0.5);
}

const randomServices = getRandomServices(services);

export const App = () => {
  // const [loading, setLoading] = useState(false);
  // const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [serviceType, setServiceType] = useState(randomServices[0].swiperText);
  const [serviceProducts, setServiceProducts] =
    useState<Services>(randomServices[0]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedItems, setSelectedItems] = useState<Array<Service | null>>([]);

  // const submit = () => {
  //   setLoading(true);
  //   sendDataToGA().then(() => {
  //     LS.setItem(LSKeys.ShowThx, true);
  //     setThx(true);
  //     setLoading(false);
  //   });
  // };

  // if (thxShow) {
  //   return <ThxLayout />;
  // }

  return (
    <>
      <div className={appSt.container}>
        <Gap size={16} />
        <div className={appSt.box}>
          <Typography.TitleResponsive
            tag="h1"
            view="large"
            font="system"
            weight="bold"
          >
            Альфа-Дом
          </Typography.TitleResponsive>
          <Gap size={8} />
          <Typography.Text
            view="primary-medium"
            color="primary"
            style={{ textAlign: "center" }}
          >
            Выберите услуги, которыми хотите воспользоваться на выгодных
            условиях следующие 6 месяцев
          </Typography.Text>
        </div>

        <Gap size={24} />

        <div>
          <Swiper style={{ marginLeft: "0" }} slidesPerView="auto">
            {services.map((service) => {
              const tabCount = selectedItems.filter(
                (selectedItem) =>
                  selectedItem?.swiperText === service.swiperText,
              ).length;

              return (
                <SwiperSlide
                  key={service.swiperText}
                  onClick={() => {
                    setServiceType(service.swiperText);
                    setServiceProducts(service);
                  }}
                  className={appSt.swSlide({
                    selected: serviceType === service.swiperText,
                  })}
                >
                  {service.swiperText}
                  {tabCount > 0 && ` (${tabCount})`}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <Gap size={32} />

        {serviceProducts && (
          <div className={appSt.products}>
            {serviceProducts.items.map((item, index) => {
              return (
                <div
                  key={item.title}
                  onClick={() => {
                    setSelectedService(item);
                    setIsModalVisible(true);
                  }}
                  className={appSt.product}
                  style={{
                    ...(index >= serviceProducts.halfWithCount && {
                      maxWidth: "100%",
                      flex: "1 1 100%",
                    }),
                    ...(selectedItems.find(
                      (selectedItem) => selectedItem?.title === item.title,
                    ) && { border: "2px solid #2083D8" }),
                  }}
                >
                  <Typography.Text
                    view="primary-medium"
                    color="primary"
                    weight="bold"
                  >
                    {item.title}
                  </Typography.Text>
                  <img
                    className={appSt.productIcon}
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                  />
                </div>
              );
            })}
          </div>
        )}

        <BottomSheet
          trimTitle={false}
          open={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          title={
            <Typography.TitleResponsive
              tag="h1"
              view="large"
              font="system"
              weight="bold"
            >
              {selectedService?.modalTitle}
            </Typography.TitleResponsive>
          }
        >
          {selectedService && (
            <div className={appSt.serviceContainer}>
              {selectedService.modalText.map((text, index) => (
                <Typography.Text
                  view="primary-medium"
                  color="primary"
                  key={index}
                >
                  {text}
                </Typography.Text>
              ))}
            </div>
          )}

          <Gap size={24} />

          {selectedItems.length > 0 &&
            selectedItems.find(
              (selectedItem) => selectedItem?.title === selectedService?.title,
            ) && (
              <>
                <Typography.Text
                  view="primary-medium"
                  color="secondary"
                  weight="bold"
                  style={{
                    height: "56px",
                    textAlign: "center",
                    alignContent: "center",
                  }}
                >
                  Уже выбрано
                </Typography.Text>
              </>
            )}

          {selectedItems.length < 6 &&
            !selectedItems.find(
              (selectedItem) => selectedItem?.title === selectedService?.title,
            ) && (
              <>
                <ButtonMobile
                  block
                  view="primary"
                  onClick={() => {
                    setSelectedItems([...selectedItems, selectedService]);
                    setIsModalVisible(false);
                  }}
                >
                  Выбрать
                </ButtonMobile>
                <Gap size={16} />
              </>
            )}

          {selectedItems.length > 0 &&
          selectedItems.find(
            (selectedItem) => selectedItem?.title === selectedService?.title,
          ) ? (
            <ButtonMobile
              block
              view="primary"
              onClick={() => {
                setSelectedItems([
                  ...selectedItems.filter(
                    (item) => item?.title !== selectedService?.title,
                  ),
                ]);
                setIsModalVisible(false);
              }}
            >
              Отменить выбор
            </ButtonMobile>
          ) : (
            <ButtonMobile
              block
              view="text"
              onClick={() => setIsModalVisible(false)}
            >
              Назад
            </ButtonMobile>
          )}
        </BottomSheet>
      </div>

      <Gap size={128} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          // loading={loading}
          disabled={selectedItems.length === 0}
          block
          view="primary"
          // onClick={submit}
        >
          Продолжить
        </ButtonMobile>

        <Gap size={16} />

        <Typography.Text
          view="primary-small"
          color="secondary"
          style={{ textAlign: "center" }}
        >
          Выберите до 6 любых сервисов
        </Typography.Text>
      </div>
    </>
  );
};
