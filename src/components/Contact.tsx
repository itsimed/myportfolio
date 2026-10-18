import { useState, type ChangeEvent, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../hooks/useLanguage';

type ContactFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactField = keyof ContactFields;
type FieldErrors = Partial<Record<ContactField, string>>;

const initialFields: ContactFields = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const { t } = useLanguage();
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [submitFailed, setSubmitFailed] = useState(false);

  const validate = (): FieldErrors => {
    const nextErrors: FieldErrors = {};
    if (!fields.name.trim()) nextErrors.name = t('contact.form.errors.name');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) nextErrors.email = t('contact.form.errors.email');
    if (!fields.subject.trim()) nextErrors.subject = t('contact.form.errors.subject');
    if (fields.message.trim().length < 10) nextErrors.message = t('contact.form.errors.message');
    return nextErrors;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const field = name as ContactField;
    setFields((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setFeedback('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      document.getElementById(`contact-${Object.keys(nextErrors)[0]}`)?.focus();
      return;
    }

    setIsSubmitting(true);
    setFeedback('');
    try {
      await emailjs.send(
        'service_a99rdnb',
        'template_g7mcdge',
        {
          user_name: fields.name,
          user_email: fields.email,
          subject: fields.subject,
          message: fields.message,
        },
        'O6YC_1QFGdyFHdCvG',
      );
      setFields(initialFields);
      setErrors({});
      setSubmitFailed(false);
      setFeedback(t('contact.form.success'));
    } catch (error) {
      console.error('Unable to send the contact form.', error);
      setSubmitFailed(true);
      setFeedback(t('contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFieldError = (field: ContactField) => errors[field]
    ? <p id={`contact-${field}-error`} className="mt-2 text-sm font-medium text-red-800">{errors[field]}</p>
    : null;

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-surface px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t('portfolio.contact.eyebrow')}
          </p>
          <h2 id="contact-title" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{t('contact.title')}</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{t('contact.subtitle')}</p>
          <a className="mt-6 inline-block font-semibold text-primary underline underline-offset-4 hover:text-foreground" href="mailto:ie.belouettar@gmail.com">
            ie.belouettar@gmail.com
          </a>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-2 block font-medium">{t('contact.form.name')}</label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                value={fields.name}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                className="min-h-12 w-full rounded-sm border border-control-border bg-background px-3 py-2"
              />
              {renderFieldError('name')}
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block font-medium">{t('contact.form.email')}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={fields.email}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                className="min-h-12 w-full rounded-sm border border-control-border bg-background px-3 py-2"
              />
              {renderFieldError('email')}
            </div>
          </div>
          <div>
            <label htmlFor="contact-subject" className="mb-2 block font-medium">{t('contact.form.subject')}</label>
            <input
              id="contact-subject"
              name="subject"
              value={fields.subject}
              onChange={handleChange}
              required
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
              className="min-h-12 w-full rounded-sm border border-control-border bg-background px-3 py-2"
            />
            {renderFieldError('subject')}
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-2 block font-medium">{t('contact.form.message')}</label>
            <textarea
              id="contact-message"
              name="message"
              rows={6}
              value={fields.message}
              onChange={handleChange}
              required
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              className="w-full resize-y rounded-sm border border-control-border bg-background px-3 py-2"
            />
            {renderFieldError('message')}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="min-h-12 rounded-sm bg-primary px-6 py-3 font-semibold text-surface transition-colors hover:bg-foreground disabled:cursor-wait disabled:opacity-60"
          >
            {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
          </button>
          {feedback && (
            <p role={submitFailed ? 'alert' : 'status'} aria-live={submitFailed ? 'assertive' : 'polite'} className={submitFailed ? 'text-red-800' : 'text-primary'}>
              {feedback}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
