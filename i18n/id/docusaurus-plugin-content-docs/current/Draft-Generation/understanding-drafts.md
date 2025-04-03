---
title: Memahami Pembuatan Konsep
sidebar_position: 0
slug: /understanding-drafts
---

## Pendahuluan {#ad165caedac347798432de75e4305252}

Tim Pemrosesan Bahasa Alami SIL International telah mengembangkan sebuah alat yang dapat membantu penerjemahan Alkitab dengan membuat konsep awal kasar untuk disunting dan disempurnakan oleh para penerjemah. Pada tanggal 1 Januari 2024, alat ini sekarang tersedia untuk digunakan dalam [Scripture Forge](https://scriptureforge.org/), sebuah platform penyuntingan Alkitab yang terintegrasi erat dengan [Paratext](https://paratext.org/).

Semua konsep yang dibuat mengandung kesalahan yang harus dikoreksi oleh tim penerjemah. Untuk beberapa proyek, kualitasnya akan terlalu rendah untuk digunakan/dibaca. Namun, pengujian lapangan yang ekstensif telah menunjukkan bahwa sejumlah besar tim menemukan bahwa konsep tersebut sangat membantu dalam pekerjaan mereka, dan memiliki kualitas yang memadai untuk digunakan sebagai titik awal bagi tim untuk menyunting.

Pada akhirnya, ukuran keberhasilan konsep adalah kegunaannya sebagai alat untuk membantu tim penerjemah dalam pekerjaan mereka, bukan kemampuannya untuk berdiri sendiri sebagai produk jadi.

## Bagaimana cara kerjanya {#bd8a69c7ed904125897b4ee26dcae489}

Agar dapat menggunakan alat ini secara efektif, penting untuk memahami cara kerjanya. Konsep dibuat dengan menggunakan proses dua langkah:

1. Mempelajari bahasanya.
2. Menerjemahkan teks.

Langkah yang paling penting adalah langkah pertama, yaitu belajar bahasa. Kualitas konsep yang dibuat, hampir sepenuhnya bergantung pada seberapa baik langkah ini.

Sistem belajar dengan melihat kalimat yang sama yang ditulis dalam berbagai bahasa, satu dalam bahasa yang sudah dimengerti, dan satu lagi dalam bahasa yang Anda terjemahkan.

Hal yang paling penting untuk diingat adalah bahwa kalimat-kalimat ini harus mengatakan hal yang sama dalam kedua bahasa. Ini adalah prinsip yang sama yang memungkinkan para ahli untuk mempelajari hieroglif dari Batu Rosetta: teks yang sama ditulis dalam tiga bahasa yang berbeda, sehingga memungkinkan perbandingan antara bahasa yang sudah dimengerti dan bahasa yang belum dimengerti.

Teks yang tersedia dalam bahasa yang Anda terjemahkan, dan bahasa yang Anda terjemahkan, dikenal sebagai "teks paralel". Secara umum, semakin banyak teks paralel yang Anda miliki, semakin baik sistem akan mempelajari bahasa tersebut. Untuk sebagian besar proyek, teks paralel ini akan menjadi teks referensi Anda, dan pekerjaan penerjemahan yang telah Anda selesaikan. Pada saat ini, kami menyarankan agar Anda memiliki setidaknya Perjanjian Baru yang telah diterjemahkan.

## Contoh kasus penggunaan {#937c1db4b24d4e85bfc2acc489bf456b}

### Contoh dasar {#9165ff8c10564a7fa67c3375f62de85e}

Misalkan sebuah tim penerjemah menerjemahkan Alkitab ke dalam bahasa lokal, dengan menggunakan NIV dalam bahasa Inggris sebagai teks referensi/sumber. Tim ini telah menyelesaikan seluruh Perjanjian Baru, dan mulai mengerjakan kitab Kejadian.
Sistem akan menghasilkan konsep sebagai berikut:

1. Mesin membandingkan Perjanjian Baru NIV bahasa Inggris dengan Perjanjian Baru bahasa lokal, untuk mempelajari bahasa tersebut.
2. Setelah mempelajari bahasanya, mesin menterjemahkan kitab Kejadian dari NIV bahasa Inggris ke dalam bahasa setempat.

Setelah membuat kitab Kejadian, tim akan menyunting konsep tersebut untuk memperbaiki kesalahan. Setelah itu, mereka akan dapat membuat konsep kitab berikutnya yang akan mereka kerjakan, dan sistem/mesin akan menggunakan terjemahan Kitab Kejadian untuk meningkatkan kualitas konsep berikutnya.

### Contoh yang lebih kompleks {#e6ec52fc004a41c195617bbcc3bb7f84}

Pada contoh pertama, tim menggunakan NIV bahasa Inggris sebagai teks referensi/sumber, dan sistem mempelajari bahasa dengan membandingkan NIV bahasa Inggris dengan Perjanjian Baru dalam bahasa lokal. Namun, dalam banyak kasus, konsep dengan kualitas yang lebih baik dapat dihasilkan dengan menggunakan teks yang berbeda dari teks yang diterjemahkan oleh tim.

Sebagai contoh, sering kali dimungkinkan untuk meningkatkan kualitas konsep dengan menggunakan terjemahan balik dari bahasa lokal ke dalam bahasa sumber. Jika tim telah menerjemahkan balik proyek ini ke dalam bahasa Inggris, maka dapat digunakan sebagai teks referensi/sumber, bukan NIV bahasa Inggris. Terjemahan balik biasanya jauh lebih harfiah daripada terjemahan normal, dan oleh karena itu memudahkan sistem untuk memahami bagaimana bahasa lokal dipetakan ke bahasa Inggris. Dalam contoh ini, sistem akan menghasilkan konsep sebagai berikut:

1. Mesin membandingkan terjemahan balik bahasa Inggris dengan Perjanjian Baru bahasa lokal, untuk mempelajari bahasa tersebut.
2. Setelah mempelajari bahasanya, mesin menterjemahkan kitab Kejadian dari NIV bahasa Inggris ke dalam bahasa setempat.

Menentukan pengaturan yang ideal untuk sebuah proyek adalah proses yang rumit, dan ini bukanlah sesuatu yang perlu Anda pelajari. Tim Pemrosesan Bahasa Alami SIL sedang mengembangkan alat bantu untuk menentukan pengaturan yang ideal, dan dapat membantu tim selama proses orientasi.

### Menghasilkan terjemahan balik {#8a64fbb8c7e741938cf5007358570d3d}

Selain membuat konsep ke dalam bahasa daerah, sistem ini juga dapat menghasilkan terjemahan balik ke dalam bahasa sumber yang didukung. Untuk menghasilkan konsep terjemahan balik, tim harus sudah menerjemahkan setidaknya beberapa kitab dari bahasa daerah ke dalam bahasa sumber.

Dalam contoh ini, anggaplah sebuah tim telah menerjemahkan keempat Injil ke dalam bahasa daerah, dan menerjemahkan balik Matius, Markus, dan Lukas ke dalam bahasa Inggris. Untuk menghasilkan konsep terjemahan balik Yohanes, sistem akan melakukan hal berikut:

1. Mesin membandingkan terjemahan balik bahasa Inggris dari Matius, Markus, dan Lukas dengan versi bahasa daerah dari Matius, Markus, dan Lukas, untuk mempelajari bahasanya.
2. Setelah mempelajari bahasanya, mesin menerjemahkan Yohanes dari bahasa daerah ke dalam bahasa Inggris.

Konsep terjemahan balik juga akan mengandung kesalahan dan harus disunting, tetapi kualitasnya biasanya jauh lebih tinggi daripada konsep terjemahan asli.

## Memulai {#1ba56b4f36584ecb91b9f2208efec047}

Pembuatan konsep terjemahan balik saat ini terbuka dan tersedia untuk semua pengguna Paratext. Menghasilkan konsep ke dalam bahasa daerah, karena kerumitan dalam penyiapannya, membutuhkan tim yang harus bergabung dengan tim Pemrosesan Bahasa Alami SIL. Silakan isi [formulir pendaftaran penyusunan konsep terjemahan](https://app.smartsheet.com/b/form/305798a45a664d8585ac74e72241d8cc), dan anggota tim akan menilai apakah proyek Anda merupakan kandidat yang baik untuk menghasilkan konsep.

Terlepas dari apakah Anda membuat konsep terjemahan balik atau konsep bahasa daerah, Anda dapat mulai dengan menghubungkan proyek Paratext Anda ke Scripture Forge dengan mengikuti langkah-langkah berikut:

1. Masuk ke [Scripture Forge](https://scriptureforge.org/), dengan menggunakan akun Paratext Anda.
2. Hubungkan proyek Paratext Anda dengan mengikuti [Panduan Menghubungkan Proyek Paratext](https://help.scriptureforge.org/connect-paratext-project). Ketika Anda menghubungkan proyek, pilih teks referensi Anda sebagai sumber. Untuk terjemahan balik, teks sumber harus berupa bahasa daerah.
3. Setelah menghubungkan proyek Anda, klik "Buat konsep" di bilah samping.
4. Jika Anda membuat konsep ke dalam bahasa daerah, Anda dapat melakukannya sendiri, dan Anda perlu mengisi formulir pendaftaran penyusunan terjemahan dengan mengklik "Daftar untuk pembuatan konsep". Jika proyek Anda sudah terdaftar, atau Anda sedang mengerjakan terjemahan balik, klik "Buat konsep" untuk memulai prosesnya.
5. Pilih konsep yang ingin Anda terjemahkan, lalu pilih kitab yang ingin Anda gunakan sebagai data pelatihan.
6. Klik "Buat konsep" untuk memulai proses.

Proses pembuatan konsep dapat memakan waktu mulai dari beberapa jam hingga beberapa hari.

Setelah Anda membuat konsep, Anda dapat melihat pratinjau konsep dan mengimpor setiap pasal ke dalam proyek Anda.

## Bahasa yang didukung untuk pembuatan konsep terjemahan balik {#70c8aaa17b6f4b5783ff0f464f59700e}

Konsep terjemahan balik dapat dibuat dari bahasa apa pun, tetapi harus diterjemahkan balik ke dalam salah satu bahasa berikut.

| Nama bahasa                        | ISO 639-1 | ISO 639-2 | ISO 639-3 |
| ---------------------------------- | --------- | --------- | --------- |
| Aceh                               |           | ace       |           |
| Arab Mesopotamia                   |           | acm       |           |
| Arab Ta'izzi-Adeni                 |           | acq       |           |
| Arab Tunisia                       |           | aeb       |           |
| Afrika                             | af        | afr       | afr       |
| Arab Levantine Selatan             |           | ajp       |           |
| Akan                               | ak        | aka       |           |
| Amharik                            | am        | amh       | amh       |
| North Levantine Arabic             |           | apc       |           |
| Standard Arabic                    | ar        | arb       | ara       |
| Arab Najdi                         |           | ars       |           |
| Arab Maroko                        |           | ary       |           |
| Arab Mesir                         |           | arz       |           |
| Assam                              | as        | asm       | asm       |
| Asturia                            |           | ast       |           |
| Awadhi                             |           | awa       |           |
| Aymara                             |           | ayr       |           |
| Azerbaijan Selatan                 |           | azb       |           |
| Azerbaijan Utara                   |           | azj       |           |
| Bashkirr                           | ba        | bak       | bak       |
| Bambara                            | bm        | bam       | bam       |
| Bali                               |           | ban       |           |
| Belarussia                         | be        | bel       | bel       |
| Bemba                              |           | bem       |           |
| Bengali                            | bn        | ben       | ben       |
| Bhojpuri                           |           | bho       |           |
| Banjar                             |           | bjn       |           |
| Tibet                              | bo        | bod       | tib       |
| Bosnia                             | bs        | bos       | bos       |
| Bugis                              |           | bug       |           |
| Bulgaria                           | bg        | bul       | bul       |
| Katalan                            | ca        | cat       | cat       |
| Cebu/Sugbu                         |           | ceb       |           |
| Ceko                               | cs        | ces       | cze       |
| Chokwe                             |           | cjk       |           |
| Kurdi Tengah                       |           | ckb       |           |
| Turki Krimea                       |           | crh       |           |
| Welsh                              | cy        | cym       | wel       |
| Denmark                            | da        | dan       | dan       |
| Jerman                             | de        | deu       | ger       |
| Dinka                              |           | dik       |           |
| Dyula                              |           | dyu       |           |
| Dzongkha                           | dz        | dzo       | dzo       |
| Yunani                             | el        | ell       | gre       |
| Inggris                            | en        | eng       | eng       |
| Esperanto                          | eo        | epo       | epo       |
| Estonia                            | et        | est       | est       |
| Basque                             | eu        | eus       | baq       |
| Ewe                                | ee        | ewe       | ewe       |
| Faro                               | fo        | fao       | fao       |
| Fiji                               | fj        | fij       | fij       |
| Finlandia                          | fi        | fin       | fin       |
| Fon                                |           | fon       |           |
| Prancis                            | fr        | fra       | fre       |
| Friuli                             |           | fur       |           |
| Fulfulde Nigeria                   |           | fuv       |           |
| Gaelik Skotlandia                  | gd        | gla       | gla       |
| Irlandia                           | ga        | gle       | gle       |
| Galisia                            | gl        | glg       | glg       |
| Guarani                            | gn        | grn       | grn       |
| Gujarat                            | gu        | guj       | guj       |
| Kreol Haiti                        |           | hat       |           |
| Hausa                              | ha        | hau       | hau       |
| Ibrani                             | he        | heb       | heb       |
| Hindi                              | hi        | hin       | hin       |
| Chhattisgarhi                      |           | hne       |           |
| Kroasia                            | hr        | hrv       | hrv       |
| Hungaria                           | hu        | hun       | hun       |
| Armenia                            | hy        | hye       | arm       |
| Igbo                               | ig        | ibo       | ibo       |
| Iloko                              |           | ilo       |           |
| Indonesia                          | id        | ind       | ind       |
| Islandia                           | is        | isl       | ice       |
| Italia                             | it        | ita       | ita       |
| Jawa                               | jv        | jav       | jav       |
| Jepang                             | ja        | jpn       | jpn       |
| Kabyle                             |           | kab       |           |
| Kachin                             |           | kac       |           |
| Kamba                              |           | kam       |           |
| Kannada (India) | kn        | kan       | kan       |
| Kashmir                            | ks        | kas       | kas       |
| Georgia                            | ka        | kat       | geo       |
| Kanuri Tengah                      |           | knc       |           |
| Kazakhtan                          | kk        | kaz       | kaz       |
| Kabiye                             |           | kbp       |           |
| Kabuverdianu                       |           | kea       |           |
| Khmer                              | km        | khm       | khm       |
| Kikuyu                             | ki        | kik       | kik       |
| Kinyarwanda                        | rw        | kin       | kin       |
| Kirgiz                             | ky        | kir       | kir       |
| Kimbundu                           |           | kmb       |           |
| Kurdi Utara                        |           | kmr       |           |
| Kongo                              | kg        | kon       | kon       |
| Korea                              | ko        | kor       | kor       |
| Lao                                | lo        | lao       | lao       |
| Liguria                            |           | lij       |           |
| Limburgia                          | li        | lim       | lim       |
| Lingala                            | ln        | lin       | lin       |
| Lithuania                          | lt        | lit       | lit       |
| Lombard                            |           | lmo       |           |
| Latgalia                           |           | ltg       |           |
| Luxemburg                          | lb        | ltz       | ltz       |
| Luba-Lulua                         |           | lua       |           |
| Luganda                            | lg        | lug       | lug       |
| Luo                                |           | luo       | luo       |
| Lushai                             |           | lus       | lus       |
| Latvia                             | lv        | lvs       | lav       |
| Magahi                             |           | mag       | mag       |
| Maithili                           |           | mai       | mai       |
| Malayalam                          | ml        | mal       | mal       |
| Marathi                            | mr        | mar       | mar       |
| Minangkabau                        |           | min       | min       |
| Makedonia                          | mk        | mkd       | mac       |
| Malagasi Dataran Tinggi            |           | plt       | plt       |
| Malta                              | mt        | mlt       | mlt       |
| Manipuri                           |           | mni       | mni       |
| Mongolia Halh                      |           | khk       | khk       |
| Mossi                              |           | mos       | mos       |
| Maori                              | mi        | mri       | mao       |
| Burma                              | my        | mya       | bur       |
| Belanda                            | nl        | nld       | dut       |
| Norwegia Nynorsk                   | nn        | nno       | nno       |
| Norwegia Bokmål                    | nb        | nob       | nob       |
| Nepal                              |           | npi       | npi       |
| Sotho Utara                        |           | nso       | nso       |
| Nuer                               |           | nus       | nus       |
| Chichewa                           | ny        | nya       | nya       |
| Okkitan                            | oc        | oci       | oci       |
| Oromo Tengah Barat                 |           | gaz       | gaz       |
| Odia                               |           | ory       | ory       |
| Pangasinan                         |           | pag       | pag       |
| Punjabi                            | pa        | pan       | pan       |
| Papiamento                         |           | pap       | pap       |
| Persia                             | fa        | pes       | per       |
| Polandia                           | pl        | pol       | pol       |
| Portugis                           | pt        | por       | por       |
| Dari                               |           | prs       | prs       |
| Pashto Selatan                     |           | pbt       | pbt       |
| Quechua                            |           | quy       | quy       |
| Rumania                            | ro        | ron       | rum       |
| Rundi                              | rn        | run       | run       |
| Rusia                              | ru        | rus       | rus       |
| Sango                              | sg        | sag       | sag       |
| Sansekerta                         | sa        | san       | san       |
| Santali                            |           | sat       | sat       |
| Sisilia                            |           | scn       | scn       |
| Shan                               |           | shn       | shn       |
| Sinhala                            | si        | sin       | sin       |
| Slovakia                           | sk        | slk       | slo       |
| Slovenia                           | sl        | slv       | slv       |
| Samoa                              | sm        | smo       | smo       |
| Shona                              | sn        | sna       | sna       |
| Sindhi                             | sd        | snd       | snd       |
| Somalia                            | so        | som       | som       |
| Sotho, Selatan                     | st        | sot       | sot       |
| Spanyol                            | es        | spa       | spa       |
| Tosk Albania                       | sq        | als       | als       |
| Sardinia                           | sc        | srd       | srd       |
| Serbia                             | sr        | srp       | srp       |
| Swazi                              | ss        | ssw       | ssw       |
| Sunda                              | su        | sun       | sun       |
| Swedia                             | sv        | swe       | swe       |
| Swahili                            | sw        | swh       | swh       |
| Silesia                            | szl       | szl       | szl       |
| Tamil                              | ta        | tam       | tam       |
| Tatar                              | tt        | tat       | tat       |
| Telugu                             | te        | tel       | tel       |
| Tajik                              | tg        | tgk       | tgk       |
| Tagalog                            | tl        | tgl       | tgl       |
| Thailand                           | th        | tha       | tha       |
| Tigrinya                           | ti        | tir       | tir       |
| Tamashek                           | tmh       | taq       | taq       |
| Tok Pisin                          | tpi       | tpi       | tpi       |
| Tswana                             | tn        | tsn       | tsn       |
| Tsonga                             | ts        | tso       | tso       |
| Turkmenistan                       | tk        | tuk       | tuk       |
| Tumbuka                            | tum       | tum       | tum       |
| Turki                              | tr        | tur       | tur       |
| Twi                                | tw        | twi       | twi       |
| Tamazight                          | tzm       | tzm       | tzm       |
| Uighur                             | ug        | uig       | uig       |
| Ukraina                            | uk        | ukr       | ukr       |
| Umbundu                            | umb       | umb       | umb       |
| Urdu                               | ur        | urd       | urd       |
| Uzbekistan                         | uz        | uzn       | uzn       |
| Venesia                            | vec       | vec       | vec       |
| Vietnam                            | vi        | vie       | vie       |
| Warai                              | war       | war       | war       |
| Wolof                              | wo        | wol       | wol       |
| Xhosa                              | xh        | xho       | xho       |
| Yiddi                              | yi        | ydd       | yid       |
| Yoruba                             | yo        | yor       | yor       |
| Kanton                             | zh        | yue       | yue       |
| Cina                               | zh        | zho       | chi       |
| Melayu                             | ms        | zsm       | zsm       |
| Zulu                               | zu        | zul       | zul       |

