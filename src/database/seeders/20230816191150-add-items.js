'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'items',
      [
        {
          id: 1,
          title: 'libero nam',
          description:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
          url: 'http://state.gov',
          price: 9765,
          quantity: 4,
          orderId: 1,
          createdAt: '2023-07-26 14:02:40',
          updatedAt: '2023-03-09 19:37:23',
        },
        {
          id: 2,
          title: 'nisl ut volutpat sapien',
          description:
            'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
          url: 'http://shop-pro.jp',
          price: 2377,
          quantity: 10,
          orderId: 10,
          createdAt: '2023-12-01 21:35:02',
          updatedAt: '2023-04-18 23:01:50',
        },
        {
          id: 3,
          title: 'sit amet consectetuer adipiscing elit proin',
          description:
            'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
          url: 'http://opera.com',
          price: 7414,
          quantity: 8,
          orderId: 11,
          createdAt: '2023-05-22 03:35:20',
          updatedAt: '2023-04-14 10:00:34',
        },
        {
          id: 4,
          title: 'neque duis bibendum morbi non quam nec dui',
          description:
            'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
          url: 'https://goo.gl',
          price: 9847,
          quantity: 1,
          orderId: 14,
          createdAt: '2023-11-13 21:04:53',
          updatedAt: '2023-01-13 00:56:40',
        },
        {
          id: 5,
          title: 'ac tellus',
          description:
            'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
          url: 'https://deviantart.com',
          price: 6596,
          quantity: 3,
          orderId: 4,
          createdAt: '2023-08-11 17:29:18',
          updatedAt: '2023-02-18 09:41:10',
        },
        {
          id: 6,
          title: 'vivamus in felis eu',
          description:
            'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
          url: 'http://walmart.com',
          price: 8283,
          quantity: 4,
          orderId: 3,
          createdAt: '2023-08-19 02:58:08',
          updatedAt: '2023-02-25 17:35:54',
        },
        {
          id: 7,
          title: 'sapien urna pretium',
          description:
            'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
          url: 'http://sohu.com',
          price: 11960,
          quantity: 3,
          orderId: 5,
          createdAt: '2023-06-27 17:47:14',
          updatedAt: '2023-03-06 04:39:16',
        },
        {
          id: 8,
          title: 'ultrices posuere',
          description:
            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
          url: 'http://w3.org',
          price: 13594,
          quantity: 7,
          orderId: 11,
          createdAt: '2023-07-04 14:52:00',
          updatedAt: '2023-03-25 17:23:00',
        },
        {
          id: 9,
          title: 'id turpis integer aliquet massa id lobortis convallis',
          description:
            'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
          url: 'https://businessweek.com',
          price: 14695,
          quantity: 9,
          orderId: 3,
          createdAt: '2023-06-15 17:36:24',
          updatedAt: '2023-01-13 07:35:57',
        },
        {
          id: 10,
          title: 'amet sapien dignissim vestibulum vestibulum ante',
          description:
            'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
          url: 'https://liveinternet.ru',
          price: 7115,
          quantity: 5,
          orderId: 12,
          createdAt: '2023-09-25 07:42:43',
          updatedAt: '2023-02-09 12:22:35',
        },
        {
          id: 11,
          title: 'eu mi nulla',
          description:
            'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
          url: 'http://weebly.com',
          price: 18965,
          quantity: 3,
          orderId: 13,
          createdAt: '2023-07-08 03:12:16',
          updatedAt: '2023-01-26 13:54:30',
        },
        {
          id: 12,
          title: 'quis orci',
          description:
            'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
          url: 'https://cbsnews.com',
          price: 8817,
          quantity: 5,
          orderId: 2,
          createdAt: '2023-09-16 10:13:21',
          updatedAt: '2023-02-16 13:51:19',
        },
        {
          id: 13,
          title: 'in blandit ultrices enim lorem ipsum',
          description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
          url: 'https://indiatimes.com',
          price: 5054,
          quantity: 1,
          orderId: 9,
          createdAt: '2023-10-14 23:42:01',
          updatedAt: '2023-03-22 07:32:25',
        },
        {
          id: 14,
          title: 'dui vel nisl duis ac nibh fusce',
          description:
            'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
          url: 'https://prlog.org',
          price: 8794,
          quantity: 4,
          orderId: 6,
          createdAt: '2023-05-26 06:21:42',
          updatedAt: '2023-03-07 09:27:53',
        },
        {
          id: 15,
          title: 'quam suspendisse potenti',
          description:
            'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
          url: 'https://rakuten.co.jp',
          price: 9213,
          quantity: 10,
          orderId: 8,
          createdAt: '2023-06-13 14:15:48',
          updatedAt: '2023-04-11 03:00:40',
        },
        {
          id: 16,
          title: 'quam a odio in hac habitasse platea',
          description:
            'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
          url: 'https://dot.gov',
          price: 11373,
          quantity: 6,
          orderId: 6,
          createdAt: '2023-07-14 23:08:05',
          updatedAt: '2023-02-01 09:07:33',
        },
        {
          id: 17,
          title: 'tincidunt eu felis',
          description:
            'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
          url: 'http://liveinternet.ru',
          price: 8672,
          quantity: 10,
          orderId: 2,
          createdAt: '2023-09-10 03:54:17',
          updatedAt: '2023-03-29 13:50:43',
        },
        {
          id: 18,
          title: 'ultrices mattis odio donec vitae',
          description:
            'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
          url: 'http://theguardian.com',
          price: 14626,
          quantity: 2,
          orderId: 2,
          createdAt: '2023-11-29 04:01:15',
          updatedAt: '2023-03-10 17:46:08',
        },
        {
          id: 19,
          title: 'quis libero nullam sit amet turpis',
          description:
            'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
          url: 'http://latimes.com',
          price: 14743,
          quantity: 10,
          orderId: 1,
          createdAt: '2023-06-10 12:55:04',
          updatedAt: '2023-02-04 11:01:04',
        },
        {
          id: 20,
          title: 'at nunc commodo placerat praesent blandit nam nulla',
          description:
            'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
          url: 'https://livejournal.com',
          price: 18412,
          quantity: 3,
          orderId: 15,
          createdAt: '2023-05-18 20:52:37',
          updatedAt: '2023-02-20 21:57:08',
        },
        {
          id: 21,
          title: 'vel nisl duis ac nibh fusce lacus',
          description:
            'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
          url: 'https://macromedia.com',
          price: 14789,
          quantity: 9,
          orderId: 4,
          createdAt: '2023-07-17 13:22:39',
          updatedAt: '2023-04-12 06:17:27',
        },
        {
          id: 22,
          title: 'quis turpis eget elit sodales',
          description: 'Morbi a ipsum. Integer a nibh. In quis justo.',
          url: 'http://google.es',
          price: 8660,
          quantity: 7,
          orderId: 15,
          createdAt: '2023-11-10 09:43:05',
          updatedAt: '2023-04-15 06:45:29',
        },
        {
          id: 23,
          title: 'ipsum aliquam non mauris morbi non',
          description:
            'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
          url: 'http://blog.com',
          price: 1722,
          quantity: 10,
          orderId: 10,
          createdAt: '2023-09-05 21:36:15',
          updatedAt: '2023-04-18 07:28:19',
        },
        {
          id: 24,
          title: 'non mauris morbi non lectus aliquam sit amet',
          description:
            'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
          url: 'http://ucsd.edu',
          price: 10273,
          quantity: 5,
          orderId: 2,
          createdAt: '2023-11-25 16:51:01',
          updatedAt: '2023-02-16 01:08:12',
        },
        {
          id: 25,
          title: 'in faucibus orci luctus et',
          description:
            'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
          url: 'http://posterous.com',
          price: 2241,
          quantity: 5,
          orderId: 12,
          createdAt: '2023-06-26 13:49:34',
          updatedAt: '2023-04-12 12:03:34',
        },
        {
          id: 26,
          title: 'aenean auctor gravida sem praesent id',
          description:
            'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
          url: 'https://ifeng.com',
          price: 10446,
          quantity: 7,
          orderId: 5,
          createdAt: '2023-09-20 11:28:02',
          updatedAt: '2023-01-15 04:16:29',
        },
        {
          id: 27,
          title: 'vehicula consequat morbi a ipsum integer a',
          description:
            'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
          url: 'https://prlog.org',
          price: 9764,
          quantity: 5,
          orderId: 8,
          createdAt: '2023-06-11 10:24:44',
          updatedAt: '2023-02-28 01:36:06',
        },
        {
          id: 28,
          title: 'rhoncus sed vestibulum sit amet',
          description:
            'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          url: 'http://gnu.org',
          price: 9977,
          quantity: 8,
          orderId: 7,
          createdAt: '2023-08-25 07:14:02',
          updatedAt: '2023-02-10 15:10:01',
        },
        {
          id: 29,
          title: 'vestibulum aliquet',
          description:
            'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
          url: 'http://sina.com.cn',
          price: 1153,
          quantity: 7,
          orderId: 6,
          createdAt: '2023-07-05 18:43:05',
          updatedAt: '2023-03-11 00:22:09',
        },
        {
          id: 30,
          title: 'nibh fusce lacus purus aliquet at',
          description:
            'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
          url: 'https://privacy.gov.au',
          price: 15018,
          quantity: 3,
          orderId: 8,
          createdAt: '2023-08-15 08:18:08',
          updatedAt: '2023-03-03 15:04:38',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
