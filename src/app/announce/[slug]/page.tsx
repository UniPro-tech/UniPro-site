import { getPostData } from "@/lib/posts";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug

    const data = await getPostData(slug, 'announce')

    return (
        <>
            <article dangerouslySetInnerHTML={{ __html: data }}></article>
        </>
    )
}