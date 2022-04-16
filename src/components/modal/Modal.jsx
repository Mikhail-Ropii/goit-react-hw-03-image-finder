export const Modal = ({ largeImageURL, alt }) => {
  return (
    <div class="overlay">
      <div class="modal">
        <img src={largeImageURL} alt={alt} />
      </div>
    </div>
  );
};
