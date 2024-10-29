type SubscriptionType =
  | "regular"
  | "dual-vaa"
  | "dual-membership"
  | "dual-goech"
  | "associate";
type TContributionClassLocalization = {
  locale: "de" | "en";
  name: string;
  description: string;
  benefits?: { name: string; description: string }[];
};
type TContributionClassOptionLocalization = {
  locale: "de" | "en";
  name: string;
  description: string;
  benefits?: { name: string; description: string }[];
};
type TContributionClassOption = {
  type: SubscriptionType;
  amount: number;
  localization: TContributionClassOptionLocalization[];
  firstYearFree?: boolean;
};
type TContributionClass = {
  id: number;
  localization: TContributionClassLocalization[];
  options: TContributionClassOption[];
};
type TPartnerOrganizationLocalization = {
  locale: string;
  name: string;
};
type TPartnerOrganization = {
  id: number;
  localization: TPartnerOrganizationLocalization[];
};
type TSubscriptions = {
  contributionClasses: TContributionClass[];
  partnerOrganizations: TPartnerOrganization[];
};

export const subscriptions: TSubscriptions = {
  contributionClasses: [
    {
      id: 1,
      localization: [
        {
          locale: "de",
          name: "Studentische Mitglieder",
          description:
            "<p>Der studentische Status kann bis zum Abschluss der Promotion jedoch maximal bis zur Vollendung des 31. Lebensjahres in Anspruch genommen werden. In begründeten Einzelfällen kann auf Antrag der Status über das 31. Lebensjahr hinaus gewährt werden. Der Status wird nur bis zum Eintritt in das Berufsleben bzw. bis zum Abschluss der Promotion gewährt. Ein berufsbegleitendes Studium bzw. ein zweites, berufsqualifizierendes Studium begründet nicht den Anspruch einer studentischen Mitgliedschaft. Dem Antrag auf studentische Mitgliedschaft ist der Studentenausweis beizufügen.</p>",
        },
        {
          locale: "en",
          name: "Student members",
          description:
            "<p>However, student status can only be used until you have completed your doctorate until you reach the age of 31. In justified individual cases, status can be granted beyond the age of 31 upon application. The status is only granted until you start working life or complete your doctorate. A part-time course of study or a second, professionally qualifying course of study does not justify the right to student membership. The student ID card must be enclosed with the application for student membership.</p>",
        },
      ],
      options: [
        {
          type: "regular",
          amount: 30,
          firstYearFree: true,
          localization: [
            {
              locale: "de",
              name: "Reguläre Mitgliedschaft",
              description:
                "<p>Sie genießen alle Vorzüge einer ordentlichen GDCh-Mitgliedschaft</p>",
              benefits: [
                {
                  name: "Nachrichten aus der Chemie",
                  description:
                    "<p>Die Mitgliederzeitschrift der GDCh erscheint monatlich und informiert über aktuelle Entwicklungen in der Chemie und in der GDCh. Postalisch und online.</p>",
                },
                {
                  name: "GDCh-Veranstaltungen",
                  description:
                    "<p>Teilnahme an GDCh-Veranstaltungen zu vergünstigten Konditionen.</p>",
                },
                {
                  name: "GDCh-Netzwerk",
                  description:
                    "<p>Lernen Sie andere Chemie-Freunde kennen und tauschen Sie sich mit Experten aus.</p>",
                },
              ],
            },
            {
              locale: "en",
              name: "Regular membership",
              description:
                "<p>You enjoy all the benefits of a full GDCh membership</p>",
              benefits: [
                {
                  name: "Nachrichten aus der Chemie",
                  description:
                    "<p>The GDCh membership magazine appears monthly and informs about current developments in chemistry and in the GDCh. By post and online.</p>",
                },
                {
                  name: "GDCh events",
                  description:
                    "<p>Participation in GDCh events at reduced conditions.</p>",
                },
                {
                  name: "GDCh network",
                  description:
                    "<p>Get to know other chemistry friends and exchange ideas with experts.</p>",
                },
              ],
            },
          ],
        },
        {
          type: "dual-vaa",
          amount: 30,
          firstYearFree: true,
          localization: [
            {
              locale: "de",
              name: "GDCh/VAA-Doppelmitgliedschaft",
              description:
                "<p>Die Option enthält automatisch die Mitgliedschaft im VAA. Der hier ausgewiesene Beitrag ist der GDCh-Anteil. Die Mitgliedschaft für Studierende ist im VAA kostenfrei.</p>",
              benefits: [
                {
                  name: "Zwei zum Preis von einem",
                  description:
                    "<p>Werden Sie zu attraktiven Konditionen Mitglied außerdem Mitglied im VAA – Fach- und Führungskräfte Chemie</p>",
                },
                {
                  name: "Alle Vorteile der regulären Mitgliedschaft",
                  description:
                    "<p>Profitieren Sie von den „Nachrichten aus der Chemie“, Veranstaltungen und unserem Netzwerk</p>",
                },
              ],
            },
            {
              locale: "en",
              name: "GDCh/VAA dual membership",
              description:
                "<p>The option automatically includes membership in the VAA. The contribution shown here is the GDCh part. Membership for students is free of charge in the VAA.</p>",
              benefits: [
                {
                  name: "Two for the price of one",
                  description:
                    "<p>Join also the “VAA - Chemistry Managers” at attractive conditions</p>",
                },
                {
                  name: "All the benefits of regular membership",
                  description:
                    "<p>Benefit from the 'Nachrichten aus der Chemie', events and our network</p>",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      localization: [
        {
          locale: "de",
          name: "Ordentliches Mitglied",
          description:
            "<p>Ordentliche Mitglieder sind: In der Chemie und angrenzenden Gebieten Tätige sowie andere an den chemischen und molekularen Wissenschaften interessierte Personen des In- und Auslands.</p>",
        },
        {
          locale: "en",
          name: "Ordinary member",
          description:
            "<p>Ordinary members are: those working in chemistry and related areas as well as other people at home and abroad interested in chemical and molecular sciences.</p>",
        },
      ],
      options: [
        {
          type: "regular",
          amount: 140,
          localization: [
            {
              locale: "de",
              name: "Reguläre Mitgliedschaft",
              description:
                "<p>Sie genießen alle Vorzüge einer ordentlichen GDCh-Mitgliedschaft</p>",
              benefits: [
                {
                  name: "Nachrichten aus der Chemie",
                  description:
                    "<p>Die Mitgliederzeitschrift der GDCh erscheint monatlich und informiert über aktuelle Entwicklungen in der Chemie und in der GDCh. Postalisch und online.</p>",
                },
                {
                  name: "GDCh-Veranstaltungen",
                  description:
                    "<p>Teilnahme an GDCh-Veranstaltungen zu vergünstigten Konditionen.</p>",
                },
                {
                  name: "GDCh-Netzwerk",
                  description:
                    "<p>Lernen Sie andere Chemie-Freunde kennen und tauschen Sie sich mit Experten aus.</p>",
                },
              ],
            },
            {
              locale: "en",
              name: "Regular membership",
              description:
                "<p>You enjoy all the benefits of a full GDCh membership</p>",
              benefits: [
                {
                  name: "Nachrichten aus der Chemie",
                  description:
                    "<p>The GDCh membership magazine appears monthly and informs about current developments in chemistry and in the GDCh. By post and online.</p>",
                },
                {
                  name: "GDCh events",
                  description:
                    "<p>Participation in GDCh events at reduced conditions.</p>",
                },
                {
                  name: "GDCh network",
                  description:
                    "<p>Get to know other chemistry friends and exchange ideas with experts.</p>",
                },
              ],
            },
          ],
        },
        {
          type: "dual-vaa",
          amount: 100,
          localization: [
            {
              locale: "de",
              name: "GDCh/VAA-Doppelmitgliedschaft",
              description:
                "<p>Die Option enthält automatisch die Mitgliedschaft im VAA. Antrag nur möglich in den ersten 5 Jahren nach Eintritt in das Berufsleben. Der hier ausgewiesene Beitrag ist nur der GDCh-Anteil.</p>",
              benefits: [
                {
                  name: "Zwei zum Preis von einem",
                  description:
                    "<p>Werden Sie zu attraktiven Konditionen Mitglied außerdem Mitglied im VAA – Fach- und Führungskräfte Chemie</p>",
                },
                {
                  name: "Alle Vorteile der regulären Mitgliedschaft",
                  description:
                    "<p>Profitieren Sie von den „Nachrichten aus der Chemie“, Veranstaltungen und unserem Netzwerk</p>",
                },
              ],
            },
            {
              locale: "en",
              name: "GDCh/VAA dual membership",
              description:
                "<p>The option automatically includes membership in the VAA. Application only possible in the first 5 years after starting working life. The contribution shown here is only the GDCh part.</p>",
              benefits: [
                {
                  name: "Two for the price of one",
                  description:
                    "<p>Join also the “VAA - Chemistry Managers” at attractive conditions</p>",
                },
                {
                  name: "All the benefits of regular membership",
                  description:
                    "<p>Benefit from the 'Nachrichten aus der Chemie', events and our network</p>",
                },
              ],
            },
          ],
        },
        {
          type: "dual-membership",
          amount: 110,
          localization: [
            {
              locale: "de",
              name: "Doppelmitgliedschaft",
              description:
                "<p>Diese Beitragskategorie gilt für Personen, die sowohl der Gesellschaft Deutscher Chemiker als auch einer Partnergesellschaft angehören.</p>",
              benefits: [
                {
                  name: "Gemeinsam mehr erreichen",
                  description:
                    "<p>Ihr Engagement in einer Partnergesellschaft der GDCh wird mit einem Preisvorteil belohnt.</p>",
                },
                {
                  name: "Alle Vorteile der regulären Mitgliedschaft",
                  description:
                    "<p>Profitieren Sie von den „Nachrichten aus der Chemie“, Veranstaltungen und unserem Netzwerk</p>",
                },
              ],
            },
            {
              locale: "en",
              name: "Dual membership",
              description:
                "<p>This contribution category applies to persons who are members of both the German Chemical Society and a partner society.</p>",
              benefits: [
                {
                  name: "Achieve more together",
                  description:
                    "<p>Your commitment to a partner society of the GDCh is rewarded with a price advantage.</p>",
                },
                {
                  name: "All the benefits of regular membership",
                  description:
                    "<p>Benefit from the 'Nachrichten aus der Chemie', events and our network</p>",
                },
              ],
            },
          ],
        },
        {
          type: "dual-goech",
          amount: 70,
          localization: [
            {
              locale: "de",
              name: "Ordentliches Doppelmitglied GÖCH",
              description:
                "<p>Unser spezielles Angebot für Mitglieder der Österreichischen Chemischen Gesellschaft (GÖCH) mit Wohnsitz in Österreich. Beim ausgewiesenen Preis handelt es sich nur um den GDCh-Anteil.</p>",
              benefits: [
                {
                  name: "Bestes Angebot im deutschsprachigen Raum",
                  description:
                    "<p>Holen Sie das Optimum aus Ihrer Mitgliedschaft in der GÖCH heraus.</p>",
                },
                {
                  name: "Alle Vorteile der regulären Mitgliedschaft",
                  description:
                    "<p>Profitieren Sie von den „Nachrichten aus der Chemie“, Veranstaltungen und unserem Netzwerk</p>",
                },
              ],
            },
            {
              locale: "en",
              name: "Ordinary double members GÖCH",
              description:
                "<p>Our special offer for members of the Austrian Chemical Society (GÖCH) residing in Austria. The price shown is only the GDCh part.</p>",
              benefits: [
                {
                  name: "Best offer in the German-speaking area",
                  description:
                    "<p>Get the most out of your membership in the GÖCH.</p>",
                },
                {
                  name: "All the benefits of regular membership",
                  description:
                    "<p>Benefit from the 'Nachrichten aus der Chemie', events and our network</p>",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      localization: [
        {
          locale: "de",
          name: "Mitglied im Ruhestand",
          description:
            "<p>Ab Vollendung des 58. Lebensjahres bei Vorruhestand</p>",
        },
        {
          locale: "en",
          name: "Retired member",
          description:
            "<p>From the age of 58 in the case of early retirement</p>",
        },
      ],
      options: [
        {
          type: "regular",
          amount: 70,
          localization: [
            {
              locale: "de",
              name: "Reguläre Mitgliedschaft",
              description:
                "<p>Sie genießen alle Vorzüge einer ordentlichen GDCh-Mitgliedschaft</p>",
              benefits: [
                {
                  name: "Nachrichten aus der Chemie",
                  description:
                    "<p>Die Mitgliederzeitschrift der GDCh erscheint monatlich und informiert über aktuelle Entwicklungen in der Chemie und in der GDCh. Postalisch und online.</p>",
                },
                {
                  name: "GDCh-Veranstaltungen",
                  description:
                    "<p>Teilnahme an GDCh-Veranstaltungen zu vergünstigten Konditionen.</p>",
                },
                {
                  name: "GDCh-Netzwerk",
                  description:
                    "<p>Lernen Sie andere Chemie-Freunde kennen und tauschen Sie sich mit Experten aus.</p>",
                },
              ],
            },
            {
              locale: "en",
              name: "Regular membership",
              description:
                "<p>You enjoy all the benefits of a full GDCh membership</p>",
              benefits: [
                {
                  name: "Nachrichten aus der Chemie",
                  description:
                    "<p>The GDCh membership magazine appears monthly and informs about current developments in chemistry and in the GDCh. By post and online.</p>",
                },
                {
                  name: "GDCh events",
                  description:
                    "<p>Participation in GDCh events at reduced conditions.</p>",
                },
                {
                  name: "GDCh network",
                  description:
                    "<p>Get to know other chemistry friends and exchange ideas with experts.</p>",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      localization: [
        {
          locale: "de",
          name: "Stellungslose ordentliche Mitglieder",
          description:
            "<p>(auf Antrag) Bitte eine Bescheinigung der Agentur für Arbeit beifügen.<br> Das erste Jahr der Stellungslosigkeit ist beitragsfrei.</p>",
        },
        {
          locale: "en",
          name: "Unemployed ordinary members",
          description:
            "<p>(upon application) Please enclose a certificate from the Employment Agency.<br> The first year of unemployment is free of contributions.</p>",
        },
      ],
      options: [
        {
          type: "regular",
          amount: 30,
          firstYearFree: true,
          localization: [
            {
              locale: "de",
              name: "Reguläre Mitgliedschaft",
              description:
                "<p>Sie genießen alle Vorzüge einer ordentlichen GDCh-Mitgliedschaft</p>",
              benefits: [
                {
                  name: "Karriereservice",
                  description:
                    "<p>Unser Karriereservice versorgt Sie mit Informationen zum Arbeitsmarkt, Stellenanzeigen und Gehaltsinformationen.</p>",
                },
                {
                  name: "GDCh-Netzwerk",
                  description:
                    "<p>Lernen Sie andere Chemie-Freunde kennen und tauschen Sie sich mit Experten aus.</p>",
                },
              ],
            },
            {
              locale: "en",
              name: "Regular membership",
              description:
                "<p>You enjoy all the benefits of a full GDCh membership</p>",
              benefits: [
                {
                  name: "Career service",
                  description:
                    "<p>Our career service provides you with information on the job market, job advertisements and salary information.</p>",
                },
                {
                  name: "GDCh network",
                  description:
                    "<p>Get to know other chemistry friends and exchange ideas with experts.</p>",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      localization: [
        {
          locale: "de",
          name: "Jungmitglied",
          description:
            "<p>Als Jungmitglieder werden geführt: ordentliche GDCh-Mitglieder bis drei Jahre nach erfolgter Promotion bzw. bei nicht promovierten Kollegen/Kolleginnen bis drei Jahre nach Eintritt in das Berufsleben. Anträge auf Führung als Jungmitglied sind an die GDCh-Geschäftsstelle mit Angabe des Promotionsdatums bzw. des Beginns der Berufstätigkeit zu richten.</p>",
        },
        {
          locale: "en",
          name: "Young member",
          description:
            "<p>The following are listed as young members: full GDCh members up to three years after completing their doctorate or, for colleagues who do not have a doctorate, up to three years after entering professional life. Applications for leadership as a young member should be sent to the GDCh Office, stating the date of the doctorate or the start of professional activity.</p>",
        },
      ],
      options: [
        {
          type: "regular",
          amount: 70,
          localization: [
            {
              locale: "de",
              name: "Reguläre Mitgliedschaft",
              description:
                "<p>Sie genießen alle Vorzüge einer ordentlichen GDCh-Mitgliedschaft</p>",
              benefits: [
                {
                  name: "Nachrichten aus der Chemie",
                  description:
                    "<p>Die Mitgliederzeitschrift der GDCh erscheint monatlich und informiert über aktuelle Entwicklungen in der Chemie und in der GDCh. Postalisch und online.</p>",
                },
                {
                  name: "GDCh-Veranstaltungen",
                  description:
                    "<p>Teilnahme an GDCh-Veranstaltungen zu vergünstigten Konditionen.</p>",
                },
                {
                  name: "GDCh-Netzwerk",
                  description:
                    "<p>Lernen Sie andere Chemie-Freunde kennen und tauschen Sie sich mit Experten aus.</p>",
                },
              ],
            },
            {
              locale: "en",
              name: "Regular membership",
              description:
                "<p>You enjoy all the benefits of a full GDCh membership</p>",
              benefits: [
                {
                  name: "Nachrichten aus der Chemie",
                  description:
                    "<p>The GDCh membership magazine appears monthly and informs about current developments in chemistry and in the GDCh. By post and online.</p>",
                },
                {
                  name: "GDCh events",
                  description:
                    "<p>Participation in GDCh events at reduced conditions.</p>",
                },
                {
                  name: "GDCh network",
                  description:
                    "<p>Get to know other chemistry friends and exchange ideas with experts.</p>",
                },
              ],
            },
          ],
        },
        {
          type: "dual-vaa",
          amount: 50,
          localization: [
            {
              locale: "de",
              name: "GDCh/VAA-Doppelmitgliedschaft",
              description:
                "<p>Die Option enthält automatisch die Mitgliedschaft im VAA. Antrag nur möglich in den ersten 5 Jahren nach Eintritt in das Berufsleben. Der hier ausgewiesene Beitrag ist nur der GDCh-Anteil.</p>",
              benefits: [
                {
                  name: "Zwei zum Preis von einem",
                  description:
                    "<p>Werden Sie zu attraktiven Konditionen Mitglied außerdem Mitglied im VAA – Fach- und Führungskräfte Chemie</p>",
                },
                {
                  name: "Alle Vorteile der regulären Mitgliedschaft",
                  description:
                    "<p>Profitieren Sie von den „Nachrichten aus der Chemie“, Veranstaltungen und unserem Netzwerk</p>",
                },
              ],
            },
            {
              locale: "en",
              name: "GDCh/VAA dual membership",
              description:
                "<p>The option automatically includes membership in the VAA. Application only possible in the first 5 years after starting working life. The contribution shown here is only the GDCh part.</p>",
              benefits: [
                {
                  name: "Two for the price of one",
                  description:
                    "<p>Join also the “VAA - Chemistry Managers” at attractive conditions</p>",
                },
                {
                  name: "All the benefits of regular membership",
                  description:
                    "<p>Benefit from the 'Nachrichten aus der Chemie', events and our network</p>",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 6,
      localization: [
        {
          locale: "de",
          name: "Mitglieder in der Ausbildung",
          description:
            "<p>Dieser Status gilt für andere an den chemischen und molekularen Wissenschaften interessierten Personen, die sich in beruflicher oder schulischer Ausbildung befinden, d.h. nicht als Student an einer Hochschule eingeschrieben sind. Dem Antrag ist ein Ausbildungsnachweis beizufügen.</p>",
        },
        {
          locale: "en",
          name: "Members in Training",
          description:
            "<p>This status applies to other persons interested in the chemical and molecular sciences who are in professional or academic training, ie not enrolled as a student in a university. Proof of education must be attached to the application.</p>",
        },
      ],
      options: [
        {
          type: "regular",
          amount: 30,
          firstYearFree: true,
          localization: [
            {
              locale: "de",
              name: "Reguläre Mitgliedschaft",
              description:
                "<p>Sie genießen alle Vorzüge einer ordentlichen GDCh-Mitgliedschaft</p>",
              benefits: [
                {
                  name: "Nachrichten aus der Chemie",
                  description:
                    "<p>Die Mitgliederzeitschrift der GDCh erscheint monatlich und informiert über aktuelle Entwicklungen in der Chemie und in der GDCh. Postalisch und online.</p>",
                },
                {
                  name: "GDCh-Veranstaltungen",
                  description:
                    "<p>Teilnahme an GDCh-Veranstaltungen zu vergünstigten Konditionen.</p>",
                },
                {
                  name: "GDCh-Netzwerk",
                  description:
                    "<p>Lernen Sie andere Chemie-Freunde kennen und tauschen Sie sich mit Experten aus.</p>",
                },
              ],
            },
            {
              locale: "en",
              name: "Regular membership",
              description:
                "<p>You enjoy all the benefits of a full GDCh membership</p>",
              benefits: [
                {
                  name: "Nachrichten aus der Chemie",
                  description:
                    "<p>The GDCh membership magazine appears monthly and informs about current developments in chemistry and in the GDCh. By post and online.</p>",
                },
                {
                  name: "GDCh events",
                  description:
                    "<p>Participation in GDCh events at reduced conditions.</p>",
                },
                {
                  name: "GDCh network",
                  description:
                    "<p>Get to know other chemistry friends and exchange ideas with experts.</p>",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 7,
      localization: [
        {
          locale: "de",
          name: "Assoziierte Mitglieder",
          description:
            "<p>Personen des In- und Auslands, deren Ausbildung nicht aus dem Bereich der Chemie und angrenzender Gebiete stammt und/oder die keine Tätigkeit in diesem Bereich ausüben und die nur an der Mitarbeit in einer der Fachgruppen und/oder der Sektionen der Gesellschaft interessiert sind.</p>",
        },
        {
          locale: "en",
          name: "Associate Members",
          description:
            "<p>People from Germany and abroad whose training does not come from the field of chemistry and related areas and/or who do not work in this field and who are only interested in working in one of the Divisions and/or the sections of society are interested.</p>",
        },
      ],
      options: [
        {
          type: "associate",
          amount: 40,
          localization: [
            {
              locale: "de",
              name: "Assoziierte Mitgliedschaft",
              description: "",
              benefits: [
                {
                  name: "Fachgruppe",
                  description:
                    "<p>Erhalten Sie vollen Zugriff auf das Leistungsspektrum einer Fachgruppe.</p>",
                },
                {
                  name: "Online-Zugang",
                  description:
                    "<p>Online-Zugang zu den Nachrichten aus der Chemie und weiteren GDCh-Publikationen.</p>",
                },
                {
                  name: "GDCh-Netzwerk",
                  description:
                    "<p>Lernen Sie andere Chemie-Freunde kennen und tauschen Sie sich mit Experten aus.</p>",
                },
              ],
            },
            {
              locale: "en",
              name: "Associate membership",
              description: "",
              benefits: [
                {
                  name: "Division",
                  description:
                    "<p>Get full access to the range of services of a division.</p>",
                },
                {
                  name: "Online access",
                  description:
                    "<p>Online access to the “Nachrichten aus der Chemie” and other GDCh publications.</p>",
                },
                {
                  name: "GDCh network",
                  description:
                    "<p>Get to know other chemistry friends and exchange ideas with experts.</p>",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 8,
      localization: [
        {
          locale: "de",
          name: "Mitglied International",
          description:
            "<p>Personen, die im Ausland leben und bis dato nur Mitglied in einer anderen chemischen Fachgesellschaft im Ausland sind, zu der die GDCh freundschaftliche Beziehungen pflegt, können auf Antrag den Status eines Mitglieds International erwerben. Gleiches gilt für ausländische Personen, die im Rahmen einer Arbeitnehmerentsendung vorübergehend in Deutschland leben.</p>",
        },
        {
          locale: "en",
          name: "Member International",
          description:
            "<p>People who live abroad and are currently only members of another chemical society abroad with which the GDCh maintains friendly relations can apply to acquire the status of an international member. The same applies to foreign nationals who are temporarily living in Germany as part of a secondment.</p>",
        },
      ],
      options: [
        {
          type: "regular",
          amount: 90,
          localization: [
            {
              locale: "de",
              name: "Reguläre Mitgliedschaft",
              description:
                "<p>Sie genießen alle Vorzüge einer ordentlichen GDCh-Mitgliedschaft</p>",
              benefits: [
                {
                  name: "Nachrichten aus der Chemie",
                  description:
                    "<p>Die Mitgliederzeitschrift der GDCh erscheint monatlich und informiert über aktuelle Entwicklungen in der Chemie und in der GDCh. Postalisch und online.</p>",
                },
                {
                  name: "GDCh-Veranstaltungen",
                  description:
                    "<p>Teilnahme an GDCh-Veranstaltungen zu vergünstigten Konditionen.</p>",
                },
                {
                  name: "GDCh-Netzwerk",
                  description:
                    "<p>Lernen Sie andere Chemie-Freunde kennen und tauschen Sie sich mit Experten aus.</p>",
                },
              ],
            },
            {
              locale: "en",
              name: "Regular membership",
              description:
                "<p>You enjoy all the benefits of a full GDCh membership</p>",
              benefits: [
                {
                  name: "Nachrichten aus der Chemie",
                  description:
                    "<p>The GDCh membership magazine appears monthly and informs about current developments in chemistry and in the GDCh. By post and online.</p>",
                },
                {
                  name: "GDCh events",
                  description:
                    "<p>Participation in GDCh events at reduced conditions.</p>",
                },
                {
                  name: "GDCh network",
                  description:
                    "<p>Get to know other chemistry friends and exchange ideas with experts.</p>",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  partnerOrganizations: [
    {
      id: 1,
      localization: [
        {
          locale: "de",
          name: "Deutsche Bunsen-Gesellschaft für Physikalische Chemie e.V. (DBG)",
        },
        {
          locale: "en",
          name: "German Bunsen Society for Physical Chemistry e.V. (DBG)",
        },
      ],
    },
    {
      id: 2,
      localization: [
        {
          locale: "de",
          name: "Gesellschaft für Chemische Technik und Biotechnologie e.V. (DECHEMA)",
        },
        {
          locale: "en",
          name: "Society for Chemical Engineering and Biotechnology e.V. (DECHEMA)",
        },
      ],
    },
    {
      id: 3,
      localization: [
        {
          locale: "de",
          name: "Deutsche Gesellschaft für Galvano- und Oberflächentechnik e.V. (DGO)",
        },
        {
          locale: "en",
          name: "German Society for Electroplating and Surface Technology e.V. (DGO)",
        },
      ],
    },
    {
      id: 4,
      localization: [
        {
          locale: "de",
          name: "Gesellschaft für Toxikologische und Forensische Chemie (GTFCh)",
        },
        {
          locale: "en",
          name: "Society for Toxicological and Forensic Chemistry (GTFCh)",
        },
      ],
    },
    {
      id: 5,
      localization: [
        {
          locale: "de",
          name: "Deutsche Glastechnische Gesellschaft e.V. (DGG)",
        },
        { locale: "en", name: "German Glass Technology Society e.V. (DGG)" },
      ],
    },
    {
      id: 6,
      localization: [
        {
          locale: "de",
          name: "Deutsche Physikalische Gesellschaft e.V. (DPG)",
        },
        { locale: "en", name: "German Physical Society e.V. (DPG)" },
      ],
    },
    {
      id: 7,
      localization: [
        { locale: "de", name: "Kerntechnische Gesellschaft e.V. (KTG)" },
        { locale: "en", name: "Nuclear Technology Society e.V. (KTG)" },
      ],
    },
    {
      id: 8,
      localization: [
        {
          locale: "de",
          name: "Deutsche Vereinigung des Gas- und Wasserfaches e.V. (DVGW)",
        },
        { locale: "en", name: "German Gas and Water Association (DVGW)" },
      ],
    },
    {
      id: 9,
      localization: [
        { locale: "de", name: "Stahlinstitut (VDEh)" },
        { locale: "en", name: "Steel Institute (VDEh)" },
      ],
    },
    {
      id: 10,
      localization: [
        {
          locale: "de",
          name: "Deutsche Vereinigung für Wasserwirtschaft, Abwasser und Abfall (DWA) e.V.",
        },
        {
          locale: "en",
          name: "German Association for Water Management, Sewage and Waste (DWA) e.V.",
        },
      ],
    },
    {
      id: 11,
      localization: [
        {
          locale: "de",
          name: "Verband der Elektrotechnik, Elektronik und Informationstechnik e.V. (VDE)",
        },
        {
          locale: "en",
          name: "Association of Electrical Engineering, Electronics and Information Technology (VDE)",
        },
      ],
    },
    {
      id: 12,
      localization: [
        {
          locale: "de",
          name: "Deutsche Wissenschaftliche Gesellschaft für nachhaltige Energieträger, Mobilität und Kohlenstoffkreisläufe e.V. (DGMK)",
        },
        {
          locale: "en",
          name: "German Scientific Society for Sustainable Energy Sources, Mobility and Carbon Cycles (DGMK)",
        },
      ],
    },
    {
      id: 13,
      localization: [
        {
          locale: "de",
          name: "Verein Deutscher Gießereifachleute e.V. (VDG)",
        },
        {
          locale: "en",
          name: "Association of German Foundry Specialists (VDG)",
        },
      ],
    },
    {
      id: 14,
      localization: [
        {
          locale: "de",
          name: "Gesellschaft für Metallurgen und Bergleute e.V. (GDMB)",
        },
        {
          locale: "en",
          name: "Society for Metallurgists and Miners (GDMB)",
        },
      ],
    },
    {
      id: 15,
      localization: [
        { locale: "de", name: "Verein Deutscher Ingenieure (VDI)" },
        { locale: "en", name: "Association of German Engineers (VDI)" },
      ],
    },
    {
      id: 16,
      localization: [
        {
          locale: "de",
          name: "Gesellschaft für Biochemie und Molekularbiologie (GBM)",
        },
        {
          locale: "en",
          name: "Society for Biochemistry and Molecular Biology (GBM)",
        },
      ],
    },
  ],
};
