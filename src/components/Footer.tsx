function Footer() {
  return (
    <footer className="footer">
      <div
        className="wrap"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <div className="row">
          <span>© 2026 Gede Bhoja Naradhipa</span>
          <span>Vol. 01 / Creative Portfolio</span>
        </div>
        <div className="row">
          <span>Designed &amp; built in Jakarta</span>
          <span style={{ color: "var(--red)" }}>●</span>
          <span>End of issue</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
