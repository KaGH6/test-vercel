export const metadata = {
    title: "Blog - My Portfolio",
    description: "Welcome to my blog page",
};

export default function Blog() {
    return (

        <main class="py-20">
            <h1 class="text-4xl font-bold text-center mb-4">Blog</h1>
            <article class="max-w-4xl mx-auto">
                <h2 class="text-2xl font-semibold">ブログタイトル</h2>
                <p class="text-lg mt-2">ブログの本文を記載します</p>
            </article>
        </main>

    );
}
