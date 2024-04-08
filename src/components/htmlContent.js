const HtmlContent = ({ className, htmlContent }) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default HtmlContent;
