const templates = [
  // Blog Title Generator
  {
    name: "Blog Title Generator",
    desc: "Generate compelling blog titles based on the provided niche and outline.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Generate 5 blog title ideas based on the following niche and outline. Provide the results in a Rich text editor format.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche.",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline.",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },

  // Blog Content Generator
  {
    name: "Blog Content Generator",
    desc: "Create detailed blog content based on the given topic and outline.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/2593/2593549.png",
    aiPrompt:
      "Generate a comprehensive blog post based on the following topic and outline. Include sections for introduction, main body, and conclusion. Provide the content in a Rich text editor format.",
    slug: "generate-blog-content",
    form: [
      {
        label: "Enter your blog topic.",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog outline.",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },

  // Blog Topic Ideas
  {
    name: "Blog Topic Ideas",
    desc: "Get creative blog topic ideas based on the provided niche.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/9079/9079267.png",
    aiPrompt:
      "Generate 10 unique blog topic ideas for the following niche. Provide the ideas in bullet points.",
    slug: "generate-blog-topic-ideas",
    form: [
      {
        label: "Enter your blog niche.",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },

  // YouTube SEO Title Generator
  {
    name: "YouTube SEO Title Generator",
    desc: "Create SEO-optimized YouTube video titles from your video description.",
    category: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/725/725300.png",
    aiPrompt:
      "Generate 5 SEO-optimized YouTube video titles based on the following video description. Provide the titles in bullet points.",
    slug: "generate-youtube-seo-title",
    form: [
      {
        label: "Enter video description.",
        field: "textarea",
        name: "description",
        required: true,
      },
    ],
  },

  // YouTube Tags Generator
  {
    name: "YouTube Tags Generator",
    desc: "Generate relevant YouTube tags based on your video description.",
    category: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/15647/15647797.png",
    aiPrompt:
      "Generate a list of relevant YouTube tags based on the following video description.",
    slug: "generate-youtube-tags",
    form: [
      {
        label: "Enter video description.",
        field: "textarea",
        name: "description",
        required: true,
      },
    ],
  },

  // Rewrite Article (Plagiarism Free)
  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Rewrite the given article to make it plagiarism-free while preserving its original meaning.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/2703/2703935.png",
    aiPrompt:
      "Rewrite the following article to make it plagiarism-free while keeping the original meaning. Provide the rewritten article in a Rich text editor format.",
    slug: "rewrite-article",
    form: [
      {
        label: "Enter article text.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },

  // Text Improver
  {
    name: "Text Improver",
    desc: "Enhance and improve the readability and engagement of the given text.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/4248/4248321.png",
    aiPrompt:
      "Improve the readability and engagement of the following text. Provide the enhanced text in a Rich text editor format.",
    slug: "improve-text",
    form: [
      {
        label: "Enter text.",
        field: "textarea",
        name: "text",
        required: true,
      },
    ],
  },

  // Add Emojis to Text
  {
    name: "Add Emojis to Text",
    desc: "Add relevant emojis to the provided text for enhanced expression.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/4160/4160724.png",
    aiPrompt:
      "Add relevant emojis to the following text to enhance expression. Provide the text with emojis in a Rich text editor format.",
    slug: "add-emojis-to-text",
    form: [
      {
        label: "Enter text.",
        field: "textarea",
        name: "text",
        required: true,
      },
    ],
  },

  // Instagram Post Generator
  {
    name: "Instagram Post Generator",
    desc: "Generate engaging Instagram post content based on the provided topic.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/2504/2504918.png",
    aiPrompt:
      "Generate engaging Instagram post content based on the following topic. Provide the post content in a Rich text editor format.",
    slug: "generate-instagram-post",
    form: [
      {
        label: "Enter post topic.",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },

  // Instagram Tag/Hashtag Generator
  {
    name: "Instagram Tag/Hashtag Generator",
    desc: "Generate relevant tags and hashtags for your Instagram post based on the content.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/16795/16795654.png",
    aiPrompt:
      "Generate a list of relevant tags and hashtags based on the following Instagram post content.",
    slug: "generate-instagram-tags",
    form: [
      {
        label: "Enter post content.",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },

  // Instagram Post/Reel Idea
  {
    name: "Instagram Post/Reel Idea",
    desc: "Generate creative ideas for Instagram posts and reels based on the provided niche.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/11820/11820224.png",
    aiPrompt:
      "Generate 5 creative ideas for Instagram posts and reels based on the following niche. Provide the ideas in bullet points.",
    slug: "generate-instagram-post-idea",
    form: [
      {
        label: "Enter your niche.",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },

  // English Grammar Check
  {
    name: "English Grammar Check",
    desc: "Check and correct grammar in the provided text.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/6091/6091117.png",
    aiPrompt:
      "Check and correct the grammar in the following text. Provide the corrected text in a Rich text editor format.",
    slug: "check-english-grammar",
    form: [
      {
        label: "Enter text.",
        field: "textarea",
        name: "text",
        required: true,
      },
    ],
  },

  // Write Code
  {
    name: "Write Code",
    desc: "Generate code based on the provided requirements and programming language.",
    category: "Programming",
    icon: "https://cdn-icons-png.flaticon.com/128/3242/3242257.png",
    aiPrompt:
      "Write code for the following requirements in the specified programming language. Provide the code in a plain text format.",
    slug: "write-code",
    form: [
      {
        label: "Enter requirements.",
        field: "textarea",
        name: "requirements",
        required: true,
      },
      {
        label: "Enter programming language.",
        field: "input",
        name: "language",
        required: true,
      },
    ],
  },

  // Explain Code
  {
    name: "Explain Code",
    desc: "Explain the functionality of the provided code.",
    category: "Programming",
    icon: "https://cdn-icons-png.flaticon.com/128/4260/4260895.png",
    aiPrompt:
      "Explain the functionality of the following code. Include a breakdown of what each part does. Provide the explanation in a plain text format.",
    slug: "explain-code",
    form: [
      {
        label: "Enter code.",
        field: "textarea",
        name: "code",
        required: true,
      },
    ],
  },

  // Code Bug Detector
  {
    name: "Code Bug Detector",
    desc: "Identify bugs and issues in the provided code and suggest corrections.",
    category: "Programming",
    icon: "https://cdn-icons-png.flaticon.com/128/6404/6404558.png",
    aiPrompt:
      "Identify bugs and issues in the following code and suggest corrections. Provide explanations for each issue and correction.",
    slug: "detect-code-bugs",
    form: [
      {
        label: "Enter code.",
        field: "textarea",
        name: "code",
        required: true,
      },
    ],
  },

  // Tagline Generator
  {
    name: "Tagline Generator",
    desc: "Generate catchy taglines for the provided product or service description.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/4213/4213199.png",
    aiPrompt:
      "Generate 5 catchy taglines for the following product or service based on its description. Provide the taglines in bullet points.",
    slug: "generate-tagline",
    form: [
      {
        label: "Enter product/service description.",
        field: "textarea",
        name: "description",
        required: true,
      },
    ],
  },

  // Product Description Generator
  {
    name: "Product Description Generator",
    desc: "Create detailed and engaging product descriptions based on the provided product details.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/12463/12463226.png",
    aiPrompt:
      "Generate a detailed and engaging product description based on the following product details. Provide the description in a Rich text editor format.",
    slug: "generate-product-description",
    form: [
      {
        label: "Enter product details.",
        field: "textarea",
        name: "details",
        required: true,
      },
    ],
  },
];

export default templates;
