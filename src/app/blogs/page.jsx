import BlogCardComponent from "@/Components/BlogCard/BlogCard";
import React from "react";

const BlogsPage = () => {
  return (
    <div>
      <header>
        <h1 className="mx-auto text-center text-2xl font-bold py-4">
          Find blogs that suits you best
        </h1>
      </header>
      <main>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {blogs.map((blog) => (
            <BlogCardComponent key={blog.id} blog={blog} />
          ))}
        </div>
      </main>
    </div>
  );
};
const blogs = [
  {
    id: 1,
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    content:
      "2021 has been a remarkable year for technology acquisitions, with companies like Apple, Microsoft, and Google leading the charge in acquiring new startups and established businesses...",
    author: "John Doe",
    publishedDate: "2021-12-31",
    tags: ["Technology", "Business", "Acquisitions"],
    image: "https://flowbite.com/docs/images/blog/image-1.jpg",
  },
  {
    id: 2,
    title: "The Future of AI: Trends to Watch",
    description:
      "AI is rapidly evolving and shaping industries across the globe. Here are the top trends to watch in the coming years.",
    content:
      "Artificial Intelligence (AI) is no longer a thing of science fiction. It is rapidly advancing and will likely transform industries such as healthcare, finance, and more...",
    author: "Jane Smith",
    publishedDate: "2022-01-15",
    tags: ["AI", "Technology", "Future"],
    image: "https://flowbite.com/docs/images/blog/image-2.jpg",
  },
  {
    id: 3,
    title: "Best Practices for Remote Work",
    description:
      "As remote work becomes the new normal, these best practices will help you stay productive and maintain work-life balance.",
    content:
      "With remote work becoming more commonplace, many companies are adopting new strategies to maintain productivity and engagement...",
    author: "Sarah Lee",
    publishedDate: "2022-02-01",
    tags: ["Remote Work", "Productivity", "Work-life Balance"],
    image: "https://flowbite.com/docs/images/blog/image-3.jpg",
  },
  {
    id: 4,
    title: "Introduction to Blockchain Technology",
    description:
      "Blockchain is transforming how data is stored and shared. Learn the basics and potential applications of this revolutionary technology.",
    content:
      "Blockchain is a decentralized ledger technology that enables secure, transparent, and tamper-proof transactions. It is revolutionizing industries from finance to healthcare...",
    author: "Alex Johnson",
    publishedDate: "2022-03-10",
    tags: ["Blockchain", "Technology", "Data Security"],
    image: "https://flowbite.com/docs/images/blog/image-4.jpg",
  },
  {
    id: 5,
    title: "Cloud Computing: The Next Big Thing",
    description:
      "Cloud computing is no longer a luxury; it's a necessity. Explore how cloud technology is revolutionizing businesses.",
    content:
      "The rise of cloud computing has enabled companies to scale faster, reduce costs, and innovate in ways that were previously impossible...",
    author: "Emily Parker",
    publishedDate: "2022-04-05",
    tags: ["Cloud Computing", "Business", "Innovation"],
    image: "https://flowbite.com/docs/images/blog/image-5.jpg",
  },
  {
    id: 6,
    title: "Cybersecurity in 2024: What to Expect",
    description:
      "With the rise of digital transformation, cybersecurity has never been more critical. Here's what to expect in the upcoming years.",
    content:
      "As we move into an era of increased digital reliance, cybersecurity threats are on the rise. Companies must be proactive in safeguarding their systems...",
    author: "Michael Brown",
    publishedDate: "2022-05-20",
    tags: ["Cybersecurity", "Digital", "Technology"],
    image: "https://flowbite.com/docs/images/blog/image-6.jpg",
  },
];

export default BlogsPage;
