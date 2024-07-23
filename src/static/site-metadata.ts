interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  description:'running life',
  siteUrl: 'https://running.xiaolongge.online',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  navLinks: [
    {
      name: 'git',
      url: 'https://github.com/xiaolonggee/running_page',
    },
    {
      name: 'About',
      url: '',
    },
  ],
};

export default data;
