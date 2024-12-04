import DeleteButton from "@/components/Delete"
import { singleBookData } from "@/utils/actions"

export default async function Page({params}) {
    const id = (await params).id

    const bookDetails = await singleBookData(id)

    console.log(bookDetails)
    return (
        <div>
            {bookDetails.title}

            <DeleteButton bookId={id}>
                delete
            </DeleteButton>
        </div>
    )
}