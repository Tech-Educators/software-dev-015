export default function Form({ action, bookDetails }) {
    return (
        <form action={action}>
            <div>
                <input type="hidden" defaultValue={bookDetails.id} name="id" />
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" required defaultValue={bookDetails.title || ''} />
            </div>

            <div>
                <label htmlFor="author">Author</label>
                <input type="text" name="author" id="author" required defaultValue={bookDetails.author || ''} />
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" required defaultValue={bookDetails.description || ''}></textarea>
            </div>

            <div>
                <label htmlFor="quote">Quote</label>
                <input type="text" name="quote" id="quote" defaultValue={bookDetails.quote || ''} />
            </div>

            <div>
                <label htmlFor="released">Release Date</label>
                <input type="date" name="released" id="released" defaultValue={bookDetails?.released ? new Date(bookDetails.released).toISOString().split('T')[0] : ''} />
            </div>

            <div>
                <label htmlFor="img_url">Image URL</label>
                <input type="url" name="img_url" id="img_url" defaultValue={bookDetails.img_url || ''} />
            </div>

            <div>
                <label htmlFor="hero_image">Hero Image URL</label>
                <input type="url" name="hero_image" id="hero_image" defaultValue={bookDetails.hero_image || ''} />
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}
