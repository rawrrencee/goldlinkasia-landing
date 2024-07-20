<script setup>
const brands = [
  {
    imageUrl: import.meta.env.VITE_LOGO_ANDREWS_TIES_URL,
    description: 'Andrew’s Ties is a family-owned Milano menswear label that gained international recognition through its notable Italian design and craftsmanship. With boutiques all over Italy including the prestigious Piazza del Duomo Milano, Andrew’s Ties is distributed in Tokyo, the US and Singapore to name a few. Handmade neckties, bowties, pocket squares, belts and poplin shirts form the core of Andrew’s collection.',
  },
  {
    imageUrl: import.meta.env.VITE_LOGO_LANVIN_URL,
    description: 'Lanvin, France’s oldest couture house still in operation, was founded in 1889. Today, under the creative directorship of Mr Lucas Ossendrijver, the luxurious yet relaxed men’s collections are acclaimed for their impeccable quality and strong, detail-focused aesthetic. Lanvin’s acceossories are no different, each piece embodying timeless elegance and refined taste.',
  },
  {
    imageUrl: import.meta.env.VITE_LOGO_CHURCHS_URL,
    description: 'Church’s was founded in 1873 by Mr Thomas Church, with his family’s shoemaking roots dating as far back as 1675. They are known today as one of the finest men’s shoemakers. Their line of mens accessories are no different. Ties and pocket squares are handmade to perfect precision in England and adds to the stable of English brands we carry.',
  },
  {
    imageUrl: import.meta.env.VITE_LOGO_ZEGNA_URL,
    description: 'Synonymous with Italian craftsmanship and design, Ermenegildo Zegna is one of the last family-owned menswear houses in the world. Founded in 1910, it is now managed by the 4th generation of the Zegna family and has stayed true to delivering impeccable men’s clothing and accessories. It is the world’s biggest producer of fine fabric and the largest menswear brand in the world by revenue. We are proud to be a distributor of a brand recognized by many as the pinnacle of Italian luxury.',
  },
  {
    imageUrl: import.meta.env.VITE_LOGO_LEONARD_URL,
    description: 'In 1958, Jacques Leonard asked the fashion designer Daniel Tribouillard to start a new company: Leonard Fashion. A man of artistic temperament, Tribouillard set out to differentiate the brand in Haute Couture. He launched a revolutionary new process for printing English weaves, that were very fashionable at the time but said to be “unprintable”. In just a few years, Tribouillard brought the Leonard brand to the world.',
  },
  {
    imageUrl: import.meta.env.VITE_LOGO_MARZTHOMSON_URL,
    description: 'Founded in 1995, MarzThomson is a much-loved cufflinks label for many. With point of sales in all of Singapore’s leading department stores, MarzThomson has become synonymous with “cufflinks from Singapore”. The sheer number of designs rolled out every season gives stylish gents the option of a fuss-free wardrobe update. Quality is not compromised, with rhodium, ruthenium and gold used to plate the cufflinks.',
  },
  {
    imageUrl: import.meta.env.VITE_LOGO_AZTHOM_URL,
    description: 'Founded in 2014, Azthom started as a made-to-measure clothier, with its first boutique at Raffles Place, Singapore. It has since expanded its distribution to the most prestigious department stores and opening its second boutique in Shanghai. Azthom has evolved to become a total look menswear label delivering impeccable designs every season. Staying through to its roots, each design is conceptualized in Singapore and then expertly created in various locations including Switzerland, Italy and England.',
  },
  {
    imageUrl: import.meta.env.VITE_LOGO_TATEOSSIAN_URL,
    description: 'Driven by his dedication to quality and panache, Mr Robert Tateossian has revolutionised the cufflink and accessories industry with his innovative approach. Touted as the “King of Cufflinks”, every piece is created with utmost dedication to design and detail. Cufflinks, watches and bracelets are core items of the brand. Their designs are contemporary, fashion-forward yet timeless. Tateossian has attracted a huge following including some of the world’s most prolific celebrities, professionals and heads of state. Truly the pinnacle of handcrafted accessories.',
  },
  {
    imageUrl: import.meta.env.VITE_LOGO_STEFANO_CAU_URL,
    description: 'The eponymous label Stefano Cau was established in 2005 with the vision of creating a line that reflected design passion and Italian craftsmanship. Mr Stefano Cau combines his family’s textile heritage and his eye for artistic expression in his designs. Production is entirely handmade in Italy by people rich in artisan experience. From the fabrics to the weaves, precision and attention to detail are hallmarks of the brand.',
  },
  {
    imageUrl: import.meta.env.VITE_LOGO_TECKNOMONSTER_URL,
    description: 'Founded in 2007, TecknoMonster is the world’s most luxurious producer of trunks and suitcases. Designed by Italian maestro Giacomo Valentini, founder of the Orobianco Group, TecknoMonster is the brand behind the coveted bullet-proof carbon fibre trunks. Both genuine carbon fibre and carbon fibre leather prints are core to the brand’s designs. Combining with other intricate details, TecknoMonster collaborates with Lamborghini and retails at some of the world’s most pretigious concept stores. 100% Made In Italy.',
  },
  {
    imageUrl: import.meta.env.VITE_LOGO_THOMPSON_URL,
    description: 'Thompson London is renowned for its exclusive cufflinks and distinctive fashion accessories. With innovative and inspirational designs, Thompson London offers a range of styles from contemporary to classic.\n' +
        'Today, Thompson London is a global brand with a presence in more than 60 countries around the world. Thompson London offers a full range of men’s cufflinks, bracelets, tie clips, collar stiffeners, money clips and  leather accessories — including wallets.',
  },
  {
    imageUrl: import.meta.env.VITE_LOGO_OROBIANCO_URL,
    description: 'Orobianco Asia is the premier distributor for Orobianco in Singapore. Based in Singapore, the online store features many exclusive products from Orobianco, and serves as an alternative to their retail store in Takashimaya.',
  },
]
</script>

<template>
  <div class="bg-background pt-24">
    <div class="mx-auto">
      <div class="relative bg-background">

        <h2 class="text-center text-3xl font-bold tracking-tight sm:text-4xl">Our Brands</h2>

        <div class="mt-12 mx-auto max-w-7xl px-6 lg:px-8">
          <ul class="mx-auto grid grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-3 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:grid-cols-4"
              role="list">
            <template v-for="brand in brands" :key="brand.name">
              <li>
                <div class="dark:bg-gray-200 rounded-lg">
                  <img :src="brand.imageUrl" alt=""
                       class="aspect-[3/2] w-full rounded-2xl object-scale-down mix-blend-multiply"/>
                </div>
                <p class="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">{{ brand.description }}</p>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>