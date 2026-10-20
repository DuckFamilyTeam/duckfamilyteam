/**
 * Pozadinski slojevi: mesh gradijent koji se kreće i zrnasta tekstura preko
 * njega. Oboje je čist CSS — ovde nema nijedne linije logike, pa komponenta
 * ostaje serverska i ne dodaje ništa u JS bundle.
 *
 * Svetlo koje je ranije pratilo kursor je uklonjeno (vizuelna provera):
 * efekat je bio toliko suptilan (alpha 0.075) da ga niko ne bi primetio da
 * nestane, a trošio je sopstveni pointermove listener u MotionRuntime.
 */
export default function Aurora() {
  return (
    <>
      <div className="aurora" aria-hidden="true">
        <span className="b1" />
        <span className="b2" />
        <span className="b3" />
      </div>
      <div className="grain" aria-hidden="true" />
    </>
  )
}
