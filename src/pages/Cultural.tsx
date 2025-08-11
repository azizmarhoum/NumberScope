import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CulturalPage() {
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Cultural Significance of Numbers
            </h1>
            <p className="text-muted-foreground">
              Explore how different cultures around the world perceive and use numbers
            </p>
          </div>

          <Tabs defaultValue="lucky" className="w-full">
            <TabsList className="grid w-full grid-cols-4 md:w-auto">
              <TabsTrigger value="lucky">Lucky Numbers</TabsTrigger>
              <TabsTrigger value="unlucky">Unlucky Numbers</TabsTrigger>
              <TabsTrigger value="mythology">Numbers in Mythology</TabsTrigger>
              <TabsTrigger value="spirituality">Spiritual Significance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="lucky" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Lucky Numbers Around the World</CardTitle>
                  <CardDescription>
                    Numbers considered fortunate in different cultures
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Number 7</h3>
                        <p>
                          In Western cultures, 7 is often considered the luckiest number. Its significance appears in many contexts:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Seven days of the week</li>
                          <li>Seven wonders of the ancient world</li>
                          <li>Seven seas and seven continents</li>
                          <li>Seven colors in a rainbow</li>
                          <li>Prominent in religious texts (7 days of creation)</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Number 8</h3>
                        <p>
                          In Chinese culture, 8 (八, bā) is considered extremely lucky because its pronunciation sounds 
                          similar to the word for prosperity (发, fā). This association is so strong that:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>People pay premium prices for phone numbers, license plates, and addresses containing 8</li>
                          <li>The Beijing Olympics began on 8/8/08 at 8:08:08 PM</li>
                          <li>Buildings often skip 4th floors but may have multiple 8th floors (8, 8A, 8B, etc.)</li>
                          <li>Business transactions are often scheduled on dates containing 8</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Number 3</h3>
                        <p>
                          The number 3 holds significance across many cultures:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>In Christianity: the Holy Trinity (Father, Son, and Holy Spirit)</li>
                          <li>In Chinese culture: represents growth (天地人 - heaven, earth, and humanity)</li>
                          <li>In Norse mythology: three realms (Asgard, Midgard, and Hel)</li>
                          <li>In Hinduism: the Trimurti (Brahma, Vishnu, and Shiva)</li>
                          <li>The rule of three in storytelling, comedy, and rhetoric</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Number 9</h3>
                        <p>
                          In many cultures, 9 is considered auspicious:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>In Chinese, its pronunciation (九, jiǔ) sounds similar to "long-lasting" (久, jiǔ)</li>
                          <li>In Norse mythology, there are nine realms of the cosmos</li>
                          <li>In Japanese culture, 9 can be pronounced "ku," which sounds similar to "suffering," giving it a mixed reputation</li>
                          <li>In Thai culture, 9 is lucky because it sounds like the word for "step forward"</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="unlucky" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Unlucky Numbers</CardTitle>
                  <CardDescription>
                    Numbers considered unfortunate or ominous in various traditions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Number 13</h3>
                        <p>
                          In Western cultures, particularly in the United States and Europe, 13 is considered highly unlucky:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Many buildings skip the 13th floor</li>
                          <li>Friday the 13th is considered an especially unlucky day</li>
                          <li>Some airlines don't have a 13th row</li>
                          <li>The fear of the number 13 has a name: triskaidekaphobia</li>
                          <li>Origins may include the Last Supper (13 attendees before Jesus's betrayal)</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Number 666</h3>
                        <p>
                          Known as "the number of the beast" in Christian traditions:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Mentioned in the Book of Revelation 13:18</li>
                          <li>Many people avoid addresses, phone numbers, and other identifiers with 666</li>
                          <li>Some buildings skip room number 666</li>
                          <li>The fear of this number is called hexakosioihexekontahexaphobia</li>
                          <li>Some biblical scholars argue it was a coded reference to Emperor Nero</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Number 4</h3>
                        <p>
                          In many East Asian countries, including China, Japan, Korea, and Taiwan, the number 4 is considered unlucky:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>In Mandarin, 4 (四, sì) sounds similar to death (死, sǐ)</li>
                          <li>In Japanese, 4 can be pronounced "shi," which also means death</li>
                          <li>Many buildings in East Asia skip floors with the number 4 (4, 14, 24, etc.)</li>
                          <li>Hospitals often avoid room numbers with 4</li>
                          <li>Products are rarely packaged in groups of four</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Number 17</h3>
                        <p>
                          In Italian culture, 17 is considered unlucky:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>The Roman numeral XVII can be rearranged to form VIXI, which in Latin means "I have lived" (implying "I am dead")</li>
                          <li>Some Italian airlines don't have a 17th row</li>
                          <li>Many Italians avoid marrying or traveling on the 17th, especially if it falls on a Friday</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="mythology" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Numbers in Mythology and Legend</CardTitle>
                  <CardDescription>
                    The symbolic meaning of numbers in stories and cultural traditions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Number 12</h3>
                        <p>
                          The number 12 appears frequently in mythologies and ancient systems:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Twelve Olympian gods in Greek mythology</li>
                          <li>Twelve tribes of Israel</li>
                          <li>Twelve disciples of Jesus</li>
                          <li>Twelve animals in the Chinese zodiac</li>
                          <li>Twelve months in a year and twelve signs of the zodiac</li>
                          <li>Twelve Knights of the Round Table in Arthurian legend</li>
                          <li>Twelve labors of Hercules</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Number 3</h3>
                        <p>
                          The number 3 is prevalent in storytelling and mythology:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Three wishes in fairy tales</li>
                          <li>Three Fates in Greek mythology (Clotho, Lachesis, and Atropos)</li>
                          <li>Three-headed dog Cerberus guarding the underworld</li>
                          <li>Three witches in "Macbeth"</li>
                          <li>Three parts of the soul according to Plato (reason, spirit, and appetite)</li>
                          <li>Three stages of life: birth, life, death</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Number 7</h3>
                        <p>
                          Seven has powerful mythological significance:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Seven deadly sins and seven virtues in Christian tradition</li>
                          <li>Seven heavens in Islamic cosmology</li>
                          <li>Seven chakras in Hindu tradition</li>
                          <li>Seven sages (Saptarishi) in Hindu mythology</li>
                          <li>Seven sisters of the Pleiades in Greek mythology</li>
                          <li>Seven gates of Thebes in Greek mythology</li>
                          <li>Seven-headed dragon in various mythologies</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Number 9</h3>
                        <p>
                          Nine appears in various mythologies:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Nine worlds in Norse mythology</li>
                          <li>Nine Muses in Greek mythology</li>
                          <li>Nine-headed Hydra</li>
                          <li>Nine circles of Hell in Dante's "Inferno"</li>
                          <li>Nine planets in ancient astronomy</li>
                          <li>Nine-day celebrations in various cultures</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="spirituality" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Spiritual and Religious Significance</CardTitle>
                  <CardDescription>
                    Numbers with special meaning in religious and spiritual traditions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Number 1</h3>
                        <p>
                          One represents unity and the divine in many traditions:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Monotheistic religions emphasize one God</li>
                          <li>In Hinduism, the ultimate reality (Brahman) is one</li>
                          <li>In Taoism, the Tao is the one origin of all existence</li>
                          <li>In numerology, 1 represents leadership, independence, and originality</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Number 40</h3>
                        <p>
                          Forty appears repeatedly in religious texts as a period of trial or preparation:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>40 days and nights of the Great Flood in the Bible</li>
                          <li>Moses spent 40 days on Mount Sinai</li>
                          <li>Israelites wandered in the desert for 40 years</li>
                          <li>Jesus fasted for 40 days in the wilderness</li>
                          <li>40-day period of Lent in Christianity</li>
                          <li>Muhammad was 40 when he received his first revelation</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Number 108</h3>
                        <p>
                          A sacred number in several Eastern religions:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Mala beads in Hinduism, Buddhism, and Jainism typically have 108 beads</li>
                          <li>There are said to be 108 energy lines converging to form the heart chakra</li>
                          <li>In yoga, 108 sun salutations (Surya Namaskar) are performed at change of seasons</li>
                          <li>The diameter of the sun is approximately 108 times the diameter of Earth</li>
                          <li>The distance from Earth to Sun is approximately 108 times the diameter of the Sun</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Numerology</h3>
                        <p>
                          The study of the mystical relationship between numbers and events:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Pythagoras (6th century BCE) believed that mathematical concepts were easier to grasp than physical ones</li>
                          <li>Gematria in Jewish mysticism assigns numerical values to words and phrases</li>
                          <li>The Chinese I Ching (Book of Changes) is based on numerical relationships</li>
                          <li>Birth dates and name numbers are thought to influence personality and destiny</li>
                          <li>Western numerology often reduces numbers to a single digit (e.g., 25 becomes 2+5=7)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}